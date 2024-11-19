<template>
    <div class="bg-slate-100 h-72 w-full">
        <div class="relative top-16 left-32 text-4xl font-bold text-black">加入我们</div>
        <div data-aos="fade-up" class="flex justify-center items-center h-auto w-full mt-16">
            <span class="text-4xl font-bold text-black ml-32">请使用</span>
            <div class="bg-slate-400 rounded-md mx-4 p-4 flex transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                :class="{ 'scale-90 duration-75': showAlert }">
                <h1 class="text-3xl p-4 rounded-lg">IP:</h1>
                <h1 class="text-3xl bg-slate-200 p-4 rounded-lg transition-all duration-500 ease-in-out hover:scale-90"
                    style="box-shadow: inset 0 4px 6px rgba(0, 0, 0, 0.1);">mc.mistmc.top</h1>
                <button @click="copyIP()"
                    class="bg-slate-300 rounded-lg p-4 ml-4 transition-all duration-500 ease-in-out hover:scale-110"
                    :class="{ 'scale-90 duration-75': showAlert }">复制</button>
            </div>
            <span class="text-4xl font-bold text-black">来进入服务器！</span>
        </div>
        <div data-aos="fade-up" class="flex justify-center items-center h-auto w-full">
            <a href="https://docs.mistmc.top/zh-CN/docs/start/start.html" target="_blank" class="text-xl text-black underline">有疑问？点击这里查看文档！</a>
        </div>
        <!-- 自定义弹窗 -->
        <div v-if="showAlert" class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div class="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                <h2 class="text-xl font-semibold text-center text-blue-500">IP已复制!</h2>
                <p class="text-center text-gray-700 mt-2">恭喜！IP 地址 [mc.mistmc.top] 已经成功复制到您的剪贴板！</p>
                <div class="mt-4 flex justify-center">
                    <button @click="closeAlert"
                        class="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">关闭</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showAlert: false,
        };
    },
    methods: {
        async copyIP() {
            const ip = "mc.mistmc.top";
            try {
                // 使用 Clipboard API 进行复制
                await navigator.clipboard.writeText(ip);
                this.showAlert = true; // 显示自定义弹窗
            } catch (error) {
                console.error("复制失败:", error);
                alert("复制失败，请手动复制IP！");
            }
        },
        closeAlert() {
            this.showAlert = false; // 关闭自定义弹窗
        },
    },
};
</script>
