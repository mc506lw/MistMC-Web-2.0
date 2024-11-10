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
                    description: "提供物理服务器，维护服务器，建立官网。",
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
                    description: "负责服务器的技术开发何维护。",
                    bilibiliUrl: "https://space.bilibili.com/3493286991891261",
                    bilibiliName: "芝士魔术师",
                },
                {
                    index: 2,
                    imageUrl: "https://crafatar.com/avatars/be9e0e79565a434a8b47a399eff71ae0",
                    name: "DDbox",
                    position: "宣传小师",
                    description: "制作了多个宣传视频，并给服务器代理许多新玩家。",
                    bilibiliUrl: "https://space.bilibili.com/3494357726399266",
                    bilibiliName: "DDbox",
                },
                {
                    index: 3,
                    imageUrl: "https://crafatar.com/avatars/dd1f59c6ddc943eba976fa848712a4bb",
                    name: "LJH",
                    position: "备份",
                    description: "服务器备份小能手，负责服务器的日常备份工作。",
                },
                {
                    index: 4,
                    imageUrl: "https://crafatar.com/avatars/2ffd8cbe74b1416f93def29f999a14ea",
                    name: "东风",
                    position: "备份",
                    description: "QQ群文件整理大师，负责QQ群文件整理工作。",
                },
                {
                    index: 5,
                    imageUrl: "http://iph.href.lu/100x100?text=?",
                    name: "石粒人",
                    position: "招聘中...",
                    description: "如果你会服务器开发/做视频宣传，那么可以去页脚的联系我们看看！",
                },
            ],
        };
    },
};
</script>