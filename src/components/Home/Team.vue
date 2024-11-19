<template>
        <div class="bg-slate-100 h-auto w-full">
            <div class="relative top-4 left-32 text-4xl font-bold">我们的团队</div>
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
                    imageUrl: "https://crafatar.com/avatars/1a1d83cef7304eee87200a3ffbc8f88c",
                    name: "老万",
                    position: "物理服主",
                    description: "宛如背后的支柱，提供并维护着服务器，并建立了官网。",
                    githubUrl: "https://github.com/mc506lw",
                    githubName: "mc506lw",
                    bilibiliUrl: "https://space.bilibili.com/696652305",
                    bilibiliName: "一只老万",
                },
                {
                    index: 1,
                    imageUrl: "https://crafatar.com/avatars/f1043f496eb34a048e4b56797297bc72",
                    name: "魔术师",
                    position: "技术",
                    description: "身负重任——不仅负责服务器的技术开发，还要承担起日常的技术维护。",
                    bilibiliUrl: "https://space.bilibili.com/3493286991891261",
                    bilibiliName: "芝士魔术师",
                },
                {
                    index: 2,
                    imageUrl: "https://crafatar.com/avatars/be9e0e79565a434a8b47a399eff71ae0",
                    name: "DDbox",
                    position: "宣传小师",
                    description: "制作了多部宣传视频，还为服务器带来了无数的新玩家。",
                    bilibiliUrl: "https://space.bilibili.com/3494357726399266",
                    bilibiliName: "DDbox",
                },
                {
                    index: 3,
                    imageUrl: "https://crafatar.com/avatars/dd1f59c6ddc943eba976fa848712a4bb",
                    name: "LJH",
                    position: "备份",
                    description: "默默无闻，却是服务器背后最坚实的后盾之一。每一次的备份，都是他为稳定运营的一份深思熟虑。",
                },
                {
                    index: 4,
                    imageUrl: "https://crafatar.com/avatars/2ffd8cbe74b1416f93def29f999a14ea",
                    name: "东风",
                    position: "管理",
                    description: "用一双巧手，把琐碎的文件管理得井井有条，为团队带来的是无尽的便利。",
                },
                {
                    index: 5,
                    imageUrl: "https://www.idcd.com/tool/placeholder/100x100?text=?",
                    name: "石粒人",
                    position: "招聘中...",
                    description: "寻找懂技术、会做视频的人才。如果你具备这些技能，或许可以加入这个充满活力的团队，肩负更多的责任和挑战。",
                },
            ],
        };
    },
};
</script>