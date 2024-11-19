<template>
    <div>
        <div class="max-w-4xl mx-auto">
            <h1 class="absolute text-4xl font-bold top-24 left-24">历史</h1>
            <div class="mt-24 relative border-l border-blue-500">
                <div data-aos="fade-up" :data-aos-delay="Number(index) * 100" v-for="item in timeline" :key="item.date"
                    class="mb-24 pl-8">
                    <div
                        class="absolute -left-4 w-8 h-8 bg-white border-2 border-blue-500 rounded-full flex items-center justify-center">
                        <div class="w-4 h-4 bg-blue-500 rounded-full"></div>
                    </div>
                    <h2 class="text-lg font-semibold">
                        {{ item.date }} | {{ item.title }}
                    </h2>
                    <p class="text-gray-700 mt-2">{{ item.content }}</p>
                </div>
            </div>
        </div>
        <div
            :class="['fixed bottom-4 w-full flex justify-center items-center', { 'opacity-0 transition-opacity duration-500': !isButtonVisible, 'opacity-100': isButtonVisible }]">
            <div @click="scrollToBottom"
                class="cursor-pointer w-32 h-12 bg-white rounded-lg flex justify-center items-center shadow-md">
                <span class="text-lg font-bold">向下滚动</span>
                <i class="icon icon-16 ml-2"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            timeline: [
                {
                    "date": "今天",
                    "title": "岚域依然在稳定运行！",
                    "content": "岚域，依旧在激情澎湃的旅程中稳步前行！这片虚拟的世界，将不断加入更多奇妙的玩法，带给所有玩家无尽的乐趣与挑战。前路漫漫，游戏的精彩将愈发绚丽多彩！"
                },
                {
                    "date": "2024-11-10",
                    "title": "新官网开发中",
                    "content": "老万不知疲倦地在编写全新的官网！新面貌的诞生，定会刷新大家对岚域的认知，期待不久之后你们能够亲身体验这一全新的用户盛宴。"
                },
                {
                    "date": "2024-10-30",
                    "title": "子服规划",
                    "content": "想象一个充满怀旧气息的养老生存服，以及一个充满创意MOD的世界！这是我们最新的子服规划，属于未来，更属于每一位渴望新鲜体验的玩家。"
                },
                {
                    "date": "2024-09-16",
                    "title": "coookie9回归",
                    "content": "竟然，突然冒了出来！是的，coookie9归来了，尽管忙得不可开交，但她依然没有时间去处理琐碎的服务器工作事宜，真是...一言难尽！"
                },
                {
                    "date": "2024-09-11",
                    "title": "新文档站上线啦",
                    "content": "新文档站已经上线！你是不是正准备进入一个信息满载、资源丰富的知识宝库？这一刻，属于每一个想要探索岚域深度的你。"
                },
                {
                    "date": "2024-08-05",
                    "title": "2.2版本更新",
                    "content": "是的，你没听错！2.2版本已经震撼更新，带来了无数让人兴奋的武器更新！此刻，你已经准备好挑战新装备带来的无穷可能了吗？"
                },
                {
                    "date": "2024-05-18",
                    "title": "服务器重新运营",
                    "content": "迎来了新的起点，服务器再度焕发活力，岚域的未来正朝着更加宏伟的方向疾驰！让我们一起见证这波澜壮阔的重启。"
                },
                {
                    "date": "2024-04-29",
                    "title": "筹集资金完成",
                    "content": "资金筹集完毕！老万211，何捣蛋400，youshark26，魔术师49，ljh65，DDbox也默默贡献了1块！合作无间，这些资金将在岚域的未来中发光发热！"
                },
                {
                    "date": "2024-04-18",
                    "title": "决定购置新实体机",
                    "content": "噩梦中的设备终于要被替换！我们决定购置新实体机，并将其安放在老万家里，这一举措将为服务器的稳定性提供强有力的保障。"
                },
                {
                    "date": "2024-04-11",
                    "title": "服务器损坏",
                    "content": "惨剧发生了——服务器主板与CPU其一损坏，cookie9因个人原因短暂消失，带来了一波不小的波动。然而，我们一定会在这个低谷中迅速恢复！"
                },
                {
                    "date": "2024-04-02",
                    "title": "发布宣传视频",
                    "content": "初次登场！我们的第一条宣传视频正式发布，惊艳的画面和激动人心的内容，将带领你进入岚域的广阔世界，快来一探究竟！"
                },
                {
                    "date": "2024-03-30 19:44",
                    "title": "记录",
                    "content": "那一刻，老万正安静地在旧文档中写下这一段话。时间仿佛凝固，一字一句，都是岚域诞生的印记。"
                },
                {
                    "date": "2024-03-30",
                    "title": "官网上线",
                    "content": "官网（1.0版本）终于上线！这不仅是一个网站的诞生，更是岚域未来新篇章的开端。它带来了无限的希望和可能性。"
                },
                {
                    "date": "2024-03-29",
                    "title": "内存升级",
                    "content": "内存升级了4G！然而，钱包却消耗了30块——不过，这一切都是为了服务器的流畅运行。果然，科技的进步总是伴随着一定的代价。"
                },
                {
                    "date": "2024-03-23",
                    "title": "机器启动",
                    "content": "等待已久的时刻终于到来！机器终于成功启动，岚域的未来从这一刻开始迎接更多的挑战与机遇！"
                },
                {
                    "date": "2024-03-06",
                    "title": "决定购买实体机",
                    "content": "在性能和钱包的挑战面前，我们终于做出了决定——购买实体机！这些硬件从五湖四海汇聚到cookie9家，未来的服务器将更加稳定。"
                },
                {
                    "date": "2024-02-23",
                    "title": "1.0关服",
                    "content": "是的，岚·域1.0的服务器正式关闭。因资金不足和频繁的服务器bug，岚域的第一版本黯然退场，然而，这只是一个新的开始。"
                },
                {
                    "date": "2024-02-14",
                    "title": "团队合并",
                    "content": "“Mist团队”和“maoj团队”经过多次的讨论与协作，最终达成了合并协议！岚域的力量将更为强大，未来的发展更令人期待。"
                },
                {
                    "date": "2024-02-02",
                    "title": "岚域1.0开服",
                    "content": "机械动力与粘液科技的世界，岚域1.0如期而至！玩家们沉浸在这全新奇幻的世界里，探索的脚步从未停歇，乐趣无穷。"
                },
                {
                    "date": "2024-01-28",
                    "title": "转向高糖云",
                    "content": "新购高糖云服务器！虽然价格较合理，但性能却稍逊，希望能提供一个稳定的基础供玩家畅游。"
                },
                {
                    "date": "2024-01-14",
                    "title": "转向阿文云",
                    "content": "我们为岚域选择了更高配置更高性价比的阿文云服务器——可惜，虽然硬件配置堪比顶级，但网速却让人有些失望（可能是超开）。"
                },
                {
                    "date": "2024-01-04~2024-01-10",
                    "title": "疯狂交钱",
                    "content": "为了稳定运行，疯狂为雨云交钱！然而，这次选择的面板服配置并不尽如人意，仍需寻找新的突破口。"
                },
                {
                    "date": "2024-01-02",
                    "title": "服务器成立",
                    "content": "岚·域的服务器正式成立！名字确定，世界也开始变得鲜活起来，新的冒险等待着每一个敢于挑战的玩家。"
                }
            ],
            isButtonVisible: true,
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            if (documentHeight - scrollY - viewportHeight < 200) {
                this.isButtonVisible = false;
            } else {
                this.isButtonVisible = true;
            }
        },
        scrollToBottom() {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        }
    },
};
</script>

<style>
.transition-opacity {
    transition: opacity 0.5s;
}
</style>
