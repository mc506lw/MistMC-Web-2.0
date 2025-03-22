<template>
        <div class="bg-slate-100 h-auto w-full">
            <div class="relative top-4 left-4 md:left-32 text-4xl font-bold">我们的团队</div>
            <div class="flex flex-wrap justify-center gap-8 mt-16 mx-[5%]">
                <TeamCard v-for="(member, index) in teamMembers" :index="index" :key="index" :imageUrl="member.imageUrl"
                    :name="member.name" :position="member.position" :description="member.description"
                    :githubUrl="member.githubUrl" :githubName="member.githubName" :bilibiliUrl="member.bilibiliUrl" :bilibiliName="member.bilibiliName" />
            </div>
            <div class="h-16 bg-slate-100 w-full"></div>
        </div>
</template>

<script>
import TeamCard from "./TeamCard.vue";

export default {
    components: { TeamCard },
    data() {
        return {
            teamMembers: [
                {
                    index: 0,
                    imageUrl: "/img/mc506lw.png",
                    name: "老万",
                    position: "⚙️物理服主",
                    description: "服务器不崩，全靠我头铁。'官网代码都是我掉的头发变的'",
                    githubUrl: "https://github.com/mc506lw",
                    githubName: "mc506lw",
                    bilibiliUrl: "https://space.bilibili.com/696652305",
                    bilibiliName: "一只老万",
                },
                {
                    index: 1,
                    imageUrl: "/img/moshushi.png",
                    name: "魔术师",
                    position: "⌨️如是超管",
                    description: "每次玩家吵架都能见到他。'上次说梦话是在调解玩家的时候'",
                    bilibiliUrl: "https://space.bilibili.com/3493286991891261",
                    bilibiliName: "芝士魔术师",
                },
                {
                    index: 2,
                    imageUrl: "/img/ddbox.png",
                    name: "DDbox",
                    position: "🎬超级up主",
                    description: "用视频骗萌新入坑。'你的三连是我更新的动力（暗示）'",
                    bilibiliUrl: "https://space.bilibili.com/3494357726399266",
                    bilibiliName: "董室长-DDbox",
                },
                {
                    index: 3,
                    imageUrl: "/img/ljh.png",
                    name: "LJH",
                    position: "💾备份狂魔",
                    description: "存在感0%但安全感100%。'上次忘备份后，我连早餐都存了云备份'",
                },
                // {
                //     index: 4,
                //     imageUrl: "https://www.idcd.com/tool/placeholder/100x100?text=?",
                //     name: "石粒人",
                //     position: "招聘中...",
                //     description: "寻找懂技术、会做视频的人才。如果你具备这些技能，或许可以加入这个充满活力的团队，肩负更多的责任和挑战。",
                // },
            ],
        };
    },
};
</script>