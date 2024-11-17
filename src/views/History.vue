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
            <div class="w-32 h-12 bg-white rounded-lg flex justify-center items-center shadow-md">
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
                    "content": "岚域将会不断做更多玩法，让玩家们在游戏中获得更多乐趣！"
                },
                {
                    "date": "2024-11-10",
                    "title": "新官网开发中",
                    "content": "老万在写新的官网！"
                },
                {
                    "date": "2024-10-30",
                    "title": "子服规划",
                    "content": "规划了一个养老生存服和MOD服"
                },
                {
                    "date": "2024-09-16",
                    "title": "coookie9回归",
                    "content": "挺突然的就出现了"
                },
                {
                    "date": "2024-09-11",
                    "title": "新文档站上线啦",
                    "content": "全新的文档站上线啦！"
                },
                {
                    "date": "2024-08-05",
                    "title": "2.2版本更新",
                    "content": "服务器更新2.2版本！超棒的武器更新！"
                },
                {
                    "date": "2024-05-18",
                    "title": "服务器重新运营",
                    "content": "服务器重新运营！"
                },
                {
                    "date": "2024-04-29",
                    "title": "筹集资金完成",
                    "content": "资金已经筹集完毕，老万211，何捣蛋400，youshark26，魔术师49，ljh65。DDbox整整出资了高达1块！！！"
                },
                {
                    "date": "2024-04-18",
                    "title": "决定购置新实体机",
                    "content": "正式决定卖新的实体机，并安放于老万家里。"
                },
                {
                    "date": "2024-04-11",
                    "title": "服务器损坏",
                    "content": "服务器主板/CPU损坏了:( cookie9因为个人原因消失了。"
                },
                {
                    "date": "2024-04-02",
                    "title": "发布宣传视频",
                    "content": "正式发布了第一条宣传视频，链接。"
                },
                {
                    "date": "2024-03-30 19:44",
                    "title": "记录",
                    "content": "当时老万在旧文档中写这句话。"
                },
                {
                    "date": "2024-03-30",
                    "title": "官网上线",
                    "content": "官网(1.0版本)上线了。"
                },
                {
                    "date": "2024-03-29",
                    "title": "内存升级",
                    "content": "内存+了4G，钱包-了30。"
                },
                {
                    "date": "2024-03-23",
                    "title": "机器启动",
                    "content": "机器终于跑起来了！"
                },
                {
                    "date": "2024-03-06",
                    "title": "决定购买实体机",
                    "content": "正式决定了要买实体机，硬件从五湖四海送到了Cookie9的家。"
                },
                {
                    "date": "2024-02-23",
                    "title": "1.0关服",
                    "content": "开学了，岚·域1.0关服了，没钱了:( 当时1.0由于使用的混合端，服务器三天两头出bug，mist团队就一直在修。"
                },
                {
                    "date": "2024-02-14",
                    "title": "团队合并",
                    "content": "经过沟通mist团队和maoj团队合并了！岚域的规模再次扩大。"
                },
                {
                    "date": "2024-02-02",
                    "title": "岚域1.0开服",
                    "content": "这是一个机械动力&粘液科技的世界，玩家们非常开心！"
                },
                {
                    "date": "2024-01-28",
                    "title": "转向高糖云",
                    "content": "买了个较便宜的服务器。"
                },
                {
                    "date": "2024-01-14",
                    "title": "转向阿文云",
                    "content": "买到了配置很好，但是网速垃圾的服务器。"
                },
                {
                    "date": "2024-01-04~2024-01-10",
                    "title": "疯狂交钱",
                    "content": "疯狂的给雨云交钱！买了个垃圾配置的面板服。"
                },
                {
                    "date": "2024-01-02",
                    "title": "服务器成立",
                    "content": "服务器成立，并正式确定名字为岚·域！"
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
        }
    },
};
</script>

<style>
.transition-opacity {
    transition: opacity 0.5s;
}
</style>
