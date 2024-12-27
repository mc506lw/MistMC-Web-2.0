<template>
  <div class="flex items-center justify-center bg-white">
    <canvas ref="canvas" class="shadow-xl rounded-lg max-h-96 w-auto border border-white"></canvas>
    <!-- 用来展示硬件信息的div -->
    <div v-if="hoveredHardware" class="absolute top-64 left-0 bg-white p-4 rounded shadow-lg z-10">
      <h3 class="select-none font-semibold text-xl">{{ hoveredHardware.name }}</h3>
      <p class="select-none">{{ hoveredHardware.info }}</p>
    </div>
  </div>
</template>
 
<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default {
  name: 'ServerConfig3D',  // 组件名称
  data() {
    return {
      hoveredHardware: null,  // 当前悬停的硬件信息
      raycaster: new THREE.Raycaster(),  // 用于射线检测
      mouse: new THREE.Vector2(),  // 鼠标位置
    };
  },
  mounted() {
    this.init3DScene();  // 组件挂载后初始化3D场景
  },
  beforeDestroy() {  // 或者在 Vue 3 中使用 unmounted
    window.removeEventListener('mousemove', this.onMouseMove);
  },
  methods: {
    init3DScene() {  // 初始化3D场景的方法
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ canvas: this.$refs.canvas });
      renderer.setSize(window.innerWidth, window.innerHeight);
 
      // 添加光源
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);
 
      const ambientLight = new THREE.AmbientLight(0x404040);
      scene.add(ambientLight);
 
      const boardGeometry = new THREE.BoxGeometry(1.5, 0.02, 2);
      const boardMaterial = new THREE.MeshStandardMaterial({ color: 0x555555 });
      const board = new THREE.Mesh(boardGeometry, boardMaterial);
      scene.add(board);
 
      const hardwareGroup = new THREE.Group();
      scene.add(hardwareGroup);
 
      // 创建硬件并添加 name 属性
      const cpu = new THREE.Mesh(
        new THREE.BoxGeometry(0.5, 0.1, 0.5),
        new THREE.MeshStandardMaterial({ color: 0xffd700 })
      );
      cpu.name = 'CPU'; // 设置 name 属性
      cpu.position.set(0, 0.05, 0);
      hardwareGroup.add(cpu);
 
      const gpu = new THREE.Mesh(
        new THREE.BoxGeometry(0.9, 0.5, 0.3),
        new THREE.MeshStandardMaterial({ color: 0x1e90ff })
      );
      gpu.name = 'GPU'; // 设置 name 属性
      gpu.position.set(0, 0.25, 0.6);
      hardwareGroup.add(gpu);
 
      const ram1 = new THREE.Mesh(
        new THREE.BoxGeometry(0.05, 0.3, 0.8),
        new THREE.MeshStandardMaterial({ color: 0xff4500 })
      );
      ram1.name = 'RAM'; // 设置 name 属性
      ram1.position.set(-0.5, 0.15, 0);
      hardwareGroup.add(ram1);
 
      const ram2 = ram1.clone(); // 复制 RAM
      ram2.position.set(-0.4, 0.15, 0);
      hardwareGroup.add(ram2);
 
      const hdd = new THREE.Mesh(
        new THREE.BoxGeometry(0.4, 0.1, 0.5),
        new THREE.MeshStandardMaterial({ color: 0x8b4513 })
      );
      hdd.name = 'HDD'; // 设置 name 属性
      hdd.position.set(0.5, 0.05, -0.3);
      hardwareGroup.add(hdd);
 
      // 添加粒子天空盒
      const particleCount = 2000; // 粒子数量
      const particlesGeometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
 
      for (let i = 0; i < particleCount; i++) {
        // 随机分布在一个立方体区域
        const x = (Math.random() - 0.5) * 20; // 立方体范围
        const y = (Math.random() - 0.5) * 20;
        const z = (Math.random() - 0.5) * 20;
        positions.set([x, y, z], i * 3);
      }
 
      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
 
      const particlesMaterial = new THREE.PointsMaterial({
        color: 0xffffff, // 白色
        size: 0.2, // 粒子大小
        transparent: true,
        opacity: 0.7, // 半透明效果
        sizeAttenuation: true, // 根据距离缩放粒子大小
        alphaTest: 0.5, // 忽略透明部分
      });
 
      const particles = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particles);
 
      // 设置相机位置
      camera.position.z = -5;
      camera.position.y = 3;
      camera.position.x = 2;
      camera.fov = 20;
      camera.updateProjectionMatrix();
 
      // 添加 OrbitControls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.25;
 
      // 动画循环
      const animate = () => {
        requestAnimationFrame(animate);
 
        // 动态旋转粒子系统以产生动态效果
        particles.rotation.y += 0.002;
        particles.rotation.x += 0.001;
 
        controls.update();
        renderer.render(scene, camera);
      };
 
      animate();
 
      // 监听窗口大小变化
      window.addEventListener('resize', () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      });
 
      window.addEventListener('mousemove', (event) => {
        this.onMouseMove(event, hardwareGroup, camera);  // 监听鼠标移动事件
      });
    },
    onMouseMove(event, scene, camera) {  // 鼠标移动事件处理方法
      // 获取canvas元素的大小
      const canvas = this.$refs.canvas;
      if (!canvas) return;  // 检查canvas是否为null
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;

      // 更新鼠标位置（归一化）
      this.mouse.x = ((event.clientX - rect.left) * scaleX) / canvas.width * 2 - 1;
      this.mouse.y = -((event.clientY - rect.top) * scaleY) / canvas.height * 2 + 1;

      // 更新射线
      this.raycaster.setFromCamera(this.mouse, camera);
      const intersects = this.raycaster.intersectObjects(scene.children, true);

      // 遍历所有硬件，恢复它们的默认颜色
      scene.traverse((child) => {
        if (child.isMesh && child.material && child.material.color && child.originalColor) {
          child.material.color.set(child.originalColor);
        }
      });

      if (intersects.length > 0) {
        const object = intersects[0].object;

        // 高亮显示硬件
        if (object.material && object.material.color) {
          if (!object.originalColor) {
            // 保存原始颜色
            object.originalColor = object.material.color.getHex();
          }
          object.material.color.set(0xffff00); // 高亮为黄色
        }

        // 显示硬件信息
        const hardwareData = this.getHardwareData(object);
        this.hoveredHardware = hardwareData;
      } else {
        // 鼠标未悬停在硬件上，清除信息
        this.hoveredHardware = null;
      }
    },
    getHardwareData(object) {  // 根据物体名称获取硬件信息
      switch (object.name) {
        case 'CPU':
          return { name: 'CPU', info: 'Intel core i3-12300T' };
        case 'GPU':
          return { name: 'GPU', info: 'NVIDIA RTX 4090 老万特挑版' };
        case 'RAM':
          return { name: 'RAM', info: 'KINGBANK DDR4 3600Mhz 32G x2' };
        case 'HDD':
          return { name: 'HDD', info: 'Western Digital 500GB 硬盘' };
        default:
          return null;
      }
    }
  }
}
</script>