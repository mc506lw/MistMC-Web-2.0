<template>
    <div>
        <nav class="bg-white shadow-md flex md:px-16 xl:px-64 pt-8 pb-4 w-full">
            <div class="min-w-48">
                <button @click="toggleLayout"
                    class="rounded whitespace-nowrap px-4 py-2 bg-blue-500 hover:bg-blue-400 transition duration-300">
                    <i :class="['icon', isCardLayout ? 'icon-liebiao' : 'icon-gengduo']"></i>
                    {{ isCardLayout ? '切换列表视图' : '切换卡片视图' }}
                </button>
            </div>

            <!-- 分类标签 -->
            <div class="flex flex-wrap justify-center gap-4 w-full">
                <button v-for="category in categories" :key="category" @click="selectCategory(category)"
                    :class="['rounded whitespace-nowrap px-4 py-2 transition duration-300',
                        selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300']">
                    {{ category }}
                </button>
            </div>

            <!-- 搜索栏 -->
            <div class="min-w-48">
                <input v-model="searchQuery" type="text" placeholder="搜索功能或指令..."
                    class="px-4 py-2 border-none rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
            </div>
        </nav>

        <!-- 主要内容区 -->
        <main class="container mx-auto px-6 py-8">

            <!-- 功能展示区 -->
            <transition-group :name="isCardLayout ? 'layout-card' : 'layout-list'" tag="div" :class="[
                'grid gap-6',
                isCardLayout ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
            ]">
                <div data-aos="fade-up" v-for="feature in filteredFeatures" :key="feature.id" :class="[
                    'bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300',
                    isCardLayout ? 'transform hover:scale-105' : 'flex items-center'
                ]">
                    <div :class="['p-6', isCardLayout ? '' : 'flex-grow']">
                        <h2 class="text-xl font-semibold mb-2">{{ feature.name }}</h2>
                        <p class="text-gray-600">{{ feature.description }}</p>
                        <div class="flex items-center justify-between h-12">
                            <span class="text-xl text-blue-500 font-medium">{{ feature.command }}</span>
                            <button v-if="feature.more" @click="showCommandModal(feature)"
                                class="rounded whitespace-nowrap px-3 py-1 bg-blue-500 text-white hover:bg-blue-400 transition duration-300">
                                更多内容
                            </button>
                        </div>
                    </div>
                </div>
            </transition-group>
        </main>

        <!-- 指令模态框 -->
        <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div class="bg-white rounded-lg p-8 max-w-md w-full">
                <h2 class="text-2xl font-bold mb-4">{{ selectedFeature.name }} 更多内容</h2>
                <p class="mt-4">{{ selectedFeature.moreText }}</p>
                <button @click="showModal = false"
                    class="rounded-md whitespace-nowrap px-4 py-2 bg-blue-500 text-white hover:bg-blue-400 transition duration-300">
                    关闭
                </button>
            </div>
        </div>

        <div class="w-full h-12 flex justify-center items-center mb-6">
            <h1 class="text-2xl">共收录<p class="text-2xl font-bold inline-block">{{ filteredFeatures.length }}</p>个指令</h1>
        </div>


        <!-- 返回顶部按钮 在页面上部就不显示 -->
        <div v-if="isTopVisible" class="fixed bottom-12 right-12">
            <button @click="scrollToTop"
                class="rounded-md w-12 h-12 bg-blue-500 text-white hover:bg-blue-400 transition duration-300 rotate-90">
                <i class="icon icon-arrow-left text-4xl"></i>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const isCardLayout = ref(true);
const searchQuery = ref('');
const selectedCategory = ref('全部');
const showModal = ref(false);
const selectedFeature = ref({});
const isTopVisible = ref(false);

const categories = ['全部', '粘液服', '大厅服', '养老服'];

const features = [
    {
        id: 1,
        name: '跨服传送',
        description: '传送到其他子服',
        category: ['粘液服', '大厅服', '养老服'],
        command: '/server <服务器名>',
        more: false,
        moreText: ''
    },
    {
        id: 2,
        name: '注册账号',
        description: '在岚域服务器内注册账号',
        category: ['粘液服', '大厅服', '养老服'],
        command: '/register <密码> <确认密码>',
        more: true,
        moreText: '密码至少6位，不能太过简单，建议使用复杂的密码，密码和确认密码必须一致。'
    },
    {
        id: 3,
        name: '登录账号',
        description: '登录岚域服务器内账号',
        category: ['粘液服', '大厅服', '养老服'],
        command: '/login <密码>',
        more: false,
        moreText: ''
    },
    {
        id: 4,
        name: '正版验证',
        description: '对当前账号进行正版验证',
        category: ['粘液服', '大厅服', '养老服'],
        command: '/premium',
        more: true,
        moreText: '此命令仅适用于正版玩家，离线玩家不要使用此命令！此命令要连续发送两遍'
    },
    {
        id: 5,
        name: '正版验证',
        description: '对当前账号进行正版验证',
        category: ['粘液服', '大厅服', '养老服'],
        command: '/premium',
        more: true,
        moreText: '此命令仅适用于正版玩家，离线玩家不要使用此命令！此命令要连续发送两遍'
    },
    {
        id: 6,
        name: '无限跑酷',
        description: '开启无限跑酷模式',
        category: ['大厅服'],
        command: '/parkour',
        more: false,
        moreText: ''
    },
    {
        id: 7,
        name: '传送玩家',
        description: '传送到其他玩家',
        category: ['粘液服', '养老服'],
        command: '/tpa <玩家名>',
        more: true,
        moreText: '此命令需要被传送的玩家接受，且需要原地等待3秒。'
    },
    {
        id: 8,
        name: '玩家传送到这里',
        description: '将其他玩家传送到你的位置',
        category: ['粘液服', '养老服'],
        command: '/tpahere <玩家名>',
        more: true,
        moreText: '此命令需要被传送的玩家接受，且需要传送的玩家在原地等待3秒。'
    },
    {
        id: 9,
        name: '同意传送请求',
        description: '同意其他玩家的传送请求',
        category: ['粘液服', '养老服'],
        command: '/tpaccept',
        more: false,
        moreText: ''
    },
    {
        id: 10,
        name: '拒绝传送请求',
        description: '拒绝其他玩家的传送请求',
        category: ['粘液服', '养老服'],
        command: '/tpdeny',
        more: false,
        moreText: ''
    },
    {
        id: 11,
        name: '传送到传送点',
        description: '传送到当前服务器的传送点',
        category: ['粘液服'],
        command: '/warp <传送点名>',
        more: false,
        moreText: ''
    },
    {
        id: 12,
        name: '打开菜单',
        description: '打开岚域服务器菜单',
        category: ['粘液服'],
        command: '/mm',
        more: false,
        moreText: ''
    },
    {
        id: 13,
        name: '创建领地',
        description: '创建一个新的领地',
        category: ['粘液服'],
        command: '/lands create <领地名>',
        more: false,
        moreText: ''
    },
    {
        id: 14,
        name: '占领区块',
        description: '为正在编辑的领地占领一个区块',
        category: ['粘液服'],
        command: '/lands claim',
        more: true,
        moreText: '占领区块需要与领地相邻，且领地处于编辑状态。'
    },
    {
        id: 15,
        name: '编辑领地',
        description: '进入领地的编辑模式',
        category: ['粘液服'],
        command: '/lands edit <领地名>',
        more: false,
        moreText: ''
    },
    {
        id: 16,
        name: '领地出生点',
        description: '设置领地出生点',
        category: ['粘液服'],
        command: '/lands setspawn',
        more: false,
        moreText: ''
    },
    {
        id: 17,
        name: '领地帮助',
        description: '展示领地相关指令',
        category: ['粘液服'],
        command: '/lands help <页数>',
        more: false,
        moreText: ''
    },
    {
        id: 18,
        name: '领地菜单',
        description: '展示领地菜单',
        category: ['粘液服'],
        command: '/lands menu',
        more: false,
        moreText: ''
    },
    {
        id: 19,
        name: '变动查看',
        description: '展示查询的位置的变动',
        category: ['粘液服'],
        command: '/co i',
        more: true,
        moreText: '需要右击目标位置，再次输入命令以关闭。'
    },
    {
        id: 20,
        name: '音乐',
        description: '打开音乐播放器',
        category: ['粘液服'],
        command: '/musicbox play',
        more: false,
        moreText: ''
    },
    {
        id: 21,
        name: '音乐商店',
        description: '打开音乐商店，购买音乐唱片',
        category: ['粘液服'],
        command: '/musicbox shop',
        more: false,
        moreText: ''
    },
    {
        id: 22,
        name: '商店',
        description: '打开商店，购买或卖出物品',
        category: ['粘液服'],
        command: '/ds',
        more: false,
        moreText: ''
    },
    {
        id: 23,
        name: '称号',
        description: '打开称号页面',
        category: ['粘液服'],
        command: '/plt open',
        more: false,
        moreText: ''
    },
    {
        id: 24,
        name: '礼包',
        description: '打开礼包页面，每日签到，每周签到',
        category: ['粘液服'],
        command: '/kit',
        more: false,
        moreText: ''
    },
    {
        id: 25,
        name: '领地飞行',
        description: '切换领地飞行模式',
        category: ['粘液服'],
        command: '/flyc',
        more: true,
        moreText: '需要有飞行能量，且在领地内。'
    },
    {
        id: 26,
        name: '飞行能量',
        description: '充值飞行能量',
        category: ['粘液服'],
        command: '/recharge',
        more: false,
        moreText: ''
    },
    {
        id: 27,
        name: '私信',
        description: '发送私信给其他玩家',
        category: ['粘液服', '养老服', '大厅服'],
        command: '/msg <玩家名> <内容>',
        more: false,
        moreText: ''
    },
    {
        id: 28,
        name: '返回死亡点',
        description: '返回上一个传送点',
        category: ['粘液服', '养老服'],
        command: '/back',
        more: true,
        moreText: '上一个传送点包括死亡点，tp到其他地方之前的位置等。'
    },
    {
        id: 29,
        name: '私信',
        description: '发送私信给其他玩家',
        category: ['粘液服', '养老服', '大厅服'],
        command: '/msg <玩家名> <内容>',
        more: false,
        moreText: ''
    },
    {
        id: 30,
        name: '私信',
        description: '发送私信给其他玩家',
        category: ['粘液服', '养老服', '大厅服'],
        command: '/tell <玩家名> <内容>',
        more: false,
        moreText: ''
    },
    {
        id: 31,
        name: '原地自杀',
        description: '让自己原地去世/自杀',
        category: ['粘液服'],
        command: '/suicide',
        more: false,
        moreText: ''
    },
    {
        id: 32,
        name: '骑乘实体',
        description: '骑在其他实体头上',
        category: ['粘液服'],
        command: '/ride',
        more: false,
        moreText: ''
    },
    {
        id: 33,
        name: '不让骑乘',
        description: '甩掉骑在头上的玩家',
        category: ['粘液服'],
        command: '/shakeitoff',
        more: false,
        moreText: ''
    },
    {
        id: 34,
        name: '主城',
        description: '传送到主城',
        category: ['粘液服'],
        command: '/spawn',
        more: false,
        moreText: ''
    },
    {
        id: 35,
        name: '安全传送模式',
        description: '切换安全传送模式',
        category: ['粘液服', '养老服'],
        command: '/tpbypass',
        more: false,
        moreText: ''
    },
    {
        id: 36,
        name: '获取粘液指南',
        description: '免费获得一本粘液科技指南',
        category: ['粘液服'],
        command: '/sf guide',
        more: false,
        moreText: ''
    },
    {
        id: 37,
        name: '粘液信息',
        description: '查看自己的粘液科技的解锁进度',
        category: ['粘液服'],
        command: '/sf stats',
        more: false,
        moreText: ''
    },
    {
        id: 38,
        name: '随机传送',
        description: '随机传送到一个地方',
        category: ['粘液服'],
        command: '/rt',
        more: false,
        moreText: ''
    },
    {
        id: 39,
        name: '资源主世界',
        description: '传送到资源世界的主世界',
        category: ['粘液服'],
        command: '/resource tp',
        more: false,
        moreText: ''
    },
    {
        id: 40,
        name: '资源地狱',
        description: '传送到资源世界的地狱世界',
        category: ['粘液服'],
        command: '/resource tp nether',
        more: false,
        moreText: ''
    },
    {
        id: 41,
        name: 'CMI帮助',
        description: '打开CMI的指令帮助',
        category: ['粘液服'],
        command: '/cmi help',
        more: false,
        moreText: ''
    },
    {
        id: 42,
        name: '选择区域',
        description: '选择一个区域',
        category: ['粘液服'],
        command: '/selection',
        more: true,
        moreText: '选择区域后可以占领或分配给领地的子区域'
    },
    {
        id: 42,
        name: '史莱姆区块',
        description: '查看附近的史莱姆区块',
        category: ['粘液服'],
        command: '/slime',
        more: false,
        moreText: ''
    },
    {
        id: 43,
        name: '粘液科技搜索',
        description: '搜索粘液科技内的物品/材料/机器',
        category: ['粘液服'],
        command: '/sf search <搜索内容>',
        more: false,
        moreText: ''
    },
    {
        id: 44,
        name: '挂机模式',
        description: '切换挂机AFK模式',
        category: ['粘液服'],
        command: '/afk',
        more: false,
        moreText: ''
    },
    {
        id: 45,
        name: '箱子商店帮助',
        description: '查看箱子商店的相关指令',
        category: ['粘液服'],
        command: '/qs',
        more: false,
        moreText: ''
    },
    {
        id: 46,
        name: '接受领地邀请',
        description: '接受其他玩家的领地的邀请',
        category: ['粘液服'],
        command: '/lands accept',
        more: false,
        moreText: ''
    },
    {
        id: 47,
        name: '查看领地余额',
        description: '查看当前编辑的领地的余额',
        category: ['粘液服'],
        command: '/lands balance',
        more: false,
        moreText: ''
    },
    {
        id: 48,
        name: '领地封禁玩家',
        description: '让被封禁的玩家无法进入领地',
        category: ['粘液服'],
        command: '/lands ban <玩家名>',
        more: false,
        moreText: ''
    },
    {
        id: 49,
        name: '列出领地区域',
        description: '列出当前编辑的领地的区域',
        category: ['粘液服'],
        command: '/lands claimlist',
        more: false,
        moreText: ''
    },
    {
        id: 50,
        name: '强制传送到领地',
        description: '忽略传送地不安全的提示，强制传送到领地',
        category: ['粘液服'],
        command: '/lands confirmtp',
        more: false,
        moreText: ''
    },
    {
        id: 51,
        name: '删除领地',
        description: '删除当前编辑的领地',
        category: ['粘液服'],
        command: '/lands delete',
        more: true,
        moreText: '需要二次确认。'
    },
    {
        id: 52,
        name: '存入领地',
        description: '为当前编辑的领地存入一定钱',
        category: ['粘液服'],
        command: '/lands deposit <金额>',
        more: false,
        moreText: ''
    },
    {
        id: 53,
        name: '显示领地信息',
        description: '显示当前编辑的领地的相关信息',
        category: ['粘液服'],
        command: '/lands info',
        more: false,
        moreText: ''
    },
    {
        id: 54,
        name: '显示领地邀请',
        description: '显示当前收到的领地邀请',
        category: ['粘液服'],
        command: '/lands invites',
        more: false,
        moreText: ''
    },
    {
        id: 55,
        name: '显示领地等级进度',
        description: '显示当前编辑的领地的等级进度',
        category: ['粘液服'],
        command: '/lands level',
        more: false,
        moreText: ''
    },
    {
        id: 56,
        name: '列出服务器所有领地',
        description: '显示服务器上的所有领地',
        category: ['粘液服'],
        command: '/lands list',
        more: false,
        moreText: ''
    },
    {
        id: 57,
        name: '显示领地地图',
        description: '显示附近的领地地图，可以显示区块是否被占领',
        category: ['粘液服'],
        command: '/lands map',
        more: false,
        moreText: ''
    },
    {
        id: 58,
        name: '合并领地',
        description: '将目标领地合并到当前编辑的领地中',
        category: ['粘液服'],
        command: '/lands merge <目标领地名>',
        more: false,
        moreText: ''
    },
    {
        id: 59,
        name: '重命名领地',
        description: '重命名当前编辑的领地',
        category: ['粘液服'],
        command: '/lands rename <新名称>',
        more: false,
        moreText: ''
    },
    {
        id: 60,
        name: '转移领地归属',
        description: '转移当前编辑的领地的归属',
        category: ['粘液服'],
        command: '/lands setowner <玩家名>',
        more: false,
        moreText: ''
    },
    {
        id: 61,
        name: '传送到领地',
        description: '传送到一个的领地',
        category: ['粘液服'],
        command: '/lands spawn <领地名>',
        more: false,
        moreText: ''
    },
    {
        id: 62,
        name: '领地排行',
        description: '查看领地排行榜',
        category: ['粘液服'],
        command: '/lands top',
        more: false,
        moreText: ''
    },
    {
        id: 63,
        name: '领地信任玩家',
        description: '将玩家加入当前编辑的领地的信任列表',
        category: ['粘液服'],
        command: '/lands trust <玩家名>',
        more: false,
        moreText: ''
    },
    {
        id: 64,
        name: '领地解除信任',
        description: '将玩家从当前编辑的领地的信任列表中移除',
        category: ['粘液服'],
        command: '/lands untrust <玩家名>',
        more: false,
        moreText: ''
    },
    {
        id: 65,
        name: '领地解封玩家',
        description: '解封被当前编辑的领地封禁的玩家',
        category: ['粘液服'],
        command: '/lands unban <玩家名>',
        more: false,
        moreText: ''
    },
    {
        id: 66,
        name: '下次收税',
        description: '查看领地下次收税的信息',
        category: ['粘液服'],
        command: '/lands upkeep',
        more: false,
        moreText: ''
    },
    {
        id: 67,
        name: '领地信息',
        description: '查看当前的领地信息',
        category: ['粘液服'],
        command: '/lands view',
        more: false,
        moreText: ''
    },
    {
        id: 68,
        name: '领地取款',
        description: '从当前编辑的领地中取款',
        category: ['粘液服'],
        command: '/lands withdraw',
        more: false,
        moreText: ''
    },
    {
        id: 69,
        name: '快速出售',
        description: '快速向系统商店中出售物品',
        category: ['粘液服'],
        command: '/ds qsell',
        more: false,
        moreText: ''
    },
    {
        id: 70,
        name: '查找箱子商店',
        description: '查找附近的箱子商店中有没有你需要的物品',
        category: ['粘液服'],
        command: '/qs find <物品名>',
        more: false,
        moreText: ''
    }
];

const filteredFeatures = computed(() => {
    return features.filter(feature => {
        const categoryMatch = selectedCategory.value === '全部' || feature.category.includes(selectedCategory.value);
        const searchMatch = feature.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            feature.description.toLowerCase().includes(searchQuery.value.toLowerCase()) || feature.command.toLowerCase().includes(searchQuery.value.toLowerCase()) || feature.moreText.toLowerCase().includes(searchQuery.value);
        return categoryMatch && searchMatch;
    });
});

const toggleLayout = () => {
    isCardLayout.value = !isCardLayout.value;
};

const selectCategory = (category) => {
    selectedCategory.value = category;
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
};

const handleScroll = () => {
    if (window.scrollY > 200) {
        isTopVisible.value = true;
    } else {
        isTopVisible.value = false;
    }
};

onscroll = handleScroll;

const showCommandModal = (feature) => {
    selectedFeature.value = feature;
    showModal.value = true;
};
</script>

<style scoped>
.layout-list-enter-from,
.layout-list-leave-to {
    opacity: 0;
    transform: translateX(-30px);
}

.layout-card-leave-active,
.layout-list-leave-active {
    position: absolute;
    right: -250px;
    bottom: -250px;
    z-index: -20;
}
</style>