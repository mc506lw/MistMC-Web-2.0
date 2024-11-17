<template>
    <div class="grid gap-4 grid-rows-4 grid-cols-4 grid-flow-col">
        <!-- 子服名字+简单介绍 -->
        <div class="col-span-2 row-span-2 grid gap-4 grid-rows-2 grid-cols-3 grid-flow-col">
            <div data-aos="fade-up" :data-aos-delay="50" class="bg-white rounded-lg shadow-lg p-4 col-span-3 row-span-1">
                <h2 class="text-2xl font-bold mb-2 text-center">科技空岛服</h2>
                <p class="text-xl mb-4 text-center">科技空岛正在研发中</p>
            </div>
            <div data-aos="fade-up" :data-aos-delay="100" class="bg-white rounded-lg shadow-lg p-4 col-span-1 row-span-1">
                <h2 class="text-2xl font-bold mb-2">服务器状态</h2>
                <p class="text-xl mt-2">正常研发中</p>
                <p class="text-xl mt-2">未开放</p>
            </div>
            <div data-aos="fade-up" :data-aos-delay="150" class="bg-white rounded-lg shadow-lg p-4 col-span-1 row-span-1">
                <h2 class="text-2xl font-bold mb-2">服务器版本</h2>
                <p class="text-xl mt-2">1.20.1</p>
                <p class="text-xl mt-2">Forge客户端</p>
            </div>
            <div data-aos="fade-up" :data-aos-delay="200" class="bg-white rounded-lg shadow-lg p-4 col-span-1 row-span-1">
                <h2 class="text-2xl font-bold mb-2">适合玩家</h2>
                <p class="text-xl mt-2">喜欢肝的人</p>
                <p class="text-xl mt-2">喜欢自动化的玩家</p>
            </div>
        </div>
        <div class="grid gap-4 grid-rows-2 grid-flow-col row-span-2 col-span-2">
            <!-- MOD1+介绍 -->
            <div data-aos="fade-up" :data-aos-delay="250" class="bg-white rounded-lg shadow-lg p-4 flex">
                <img data-src="https://www.idcd.com/tool/placeholder/900x900?text=sf" class="lazyload w-32 h-32 rounded-md mr-4">
                <div>
                    <h2 class="text-2xl font-bold mb-2">MOD1</h2>
                    <p class="text-xl mb-4">MOD1的介绍</p>
                </div>
            </div>
            <!-- MOD2+介绍 -->
            <div data-aos="fade-up" :data-aos-delay="300" class="bg-white rounded-lg shadow-lg p-4 flex">
                <img data-src="https://www.idcd.com/tool/placeholder/900x900?text=sf" class="lazyload w-32 h-32 rounded-md mr-4">
                <div>
                    <h2 class="text-2xl font-bold mb-2">MOD2</h2>
                    <p class="text-xl mb-4">MOD2的介绍</p>
                </div>
            </div>
            <!-- MOD3+介绍 -->
            <div data-aos="fade-up" :data-aos-delay="300" class="bg-white rounded-lg shadow-lg p-4 flex">
                <img data-src="https://www.idcd.com/tool/placeholder/900x900?text=sf" class="lazyload w-32 h-32 rounded-md mr-4">
                <div>
                    <h2 class="text-2xl font-bold mb-2">MOD3</h2>
                    <p class="text-xl mb-4">MOD3的介绍</p>
                </div>
            </div>
            <!-- MOD4+介绍 -->
            <div data-aos="fade-up" :data-aos-delay="350" class="bg-white rounded-lg shadow-lg p-4 flex">
                <img data-src="https://www.idcd.com/tool/placeholder/900x900?text=sf" class="lazyload w-32 h-32 rounded-md mr-4">
                <div>
                    <h2 class="text-2xl font-bold mb-2">MOD4</h2>
                    <p class="text-xl mb-4">MOD4的介绍</p>
                </div>
            </div>
        </div>
        <!-- 风景图片 -->
        <div data-aos="fade-up" :data-aos-delay="250" class="bg-white rounded-lg shadow-lg col-span-2 row-span-2 max-h-[35vh] w-full">
            <img data-src="https://www.idcd.com/tool/placeholder/720x480?text=sf"
                class="lazyload w-full h-full object-cover rounded-lg">
        </div>
        <!-- 玩家评价 -->
        <div data-aos="fade-up" :data-aos-delay="400" class="bg-white rounded-lg shadow-lg p-4 flex">
            <img src="https://www.idcd.com/tool/placeholder/900x900?text=sf" class="w-32 h-32 rounded-md mr-4">
            <div>
                <h2 class="text-2xl font-bold mb-2">玩家ID</h2>
                <p class="text-xl mb-4">评价</p>
            </div>
        </div>
        <div data-aos="fade-up" :data-aos-delay="450" class="bg-white rounded-lg shadow-lg p-4 flex">
            <img src="https://www.idcd.com/tool/placeholder/900x900?text=sf" class="w-32 h-32 rounded-md mr-4">
            <div>
                <h2 class="text-2xl font-bold mb-2">玩家ID</h2>
                <p class="text-xl mb-4">评价</p>
            </div>
        </div>
        <!-- 地图图片 -->
        <div data-aos="fade-up" :data-aos-delay="500"  class="bg-white rounded-lg shadow-lg p-4 col-span-1 row-span-2 max-h-[35vh] w-full">
            <img data-src="https://www.idcd.com/tool/placeholder/900x900?text=sf"
                class="lazyload w-full h-full object-cover rounded-lg">
        </div>
    </div>
</template>
