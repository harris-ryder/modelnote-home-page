import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber"
import { GLTF } from 'three-stdlib';
import { Mesh, Material, Group, MeshStandardMaterial } from 'three';

type GLTFResult = GLTF & {
  nodes: {
    [key: string]: Mesh;
  };
  materials: {
    [key: string]: Material;
  };
};


export function DemoModel() {
  const { nodes, materials } = useGLTF('models/gameboy.glb') as GLTFResult



  const plastic_main = new MeshStandardMaterial({ color: "#f5f5f5" });
  const plastic_buttons_ab = new MeshStandardMaterial({
    color: "#e85497",
  });
  const plastic_dPad = new MeshStandardMaterial({ color: "#5f5f5f" });
  const plastic_buttons_selStart = new MeshStandardMaterial({
    color: "#aaaaaa",
  });
  const plastic_cartridge = new MeshStandardMaterial({ color: "yellow" });
  const plastic_black = new MeshStandardMaterial({ color: "black" });


  const ref = useRef<Group>(null!)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.set(Math.cos(t / 2) / 8 + -2, Math.sin(t / 4) / 8, (1 + Math.sin(t / 1.5)) / 20 + 1.5)
    ref.current.position.y = (1 + Math.sin(t / 1.1)) / 10
  })

  return (
    <group ref={ref} dispose={null}>
      <group position={[1.358, 5.107, -1.28]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={0.306}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text_1.geometry}
          material={plastic_cartridge}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text_2.geometry}
          material={materials.dogeSticker}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.inside_grill.geometry}
        material={plastic_main}
        position={[0.048, -0.292, -0.176]}
        scale={[0.981, 1, 0.936]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.d_pad.geometry}
        material={plastic_dPad}
        position={[-1.968, -2.041, 0.985]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.on_switch.geometry}
        material={plastic_black}
        position={[-2.372, 6.003, -0.095]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.button_a.geometry}
        material={plastic_buttons_ab}
        position={[2.611, -1.661, 0.984]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.button_b.geometry}
        material={plastic_buttons_ab}
        position={[1.425, -2.216, 1.864]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.selectButton.geometry}
        material={plastic_buttons_selStart}
        position={[-1.299, -3.96, 0.963]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.jack.geometry}
        material={plastic_black}
        position={[3.419, 3.821, -0.538]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.615, 0.104, 0.615]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border.geometry}
        material={plastic_black}
        position={[0.048, -0.292, -0.054]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.volume_button.geometry}
        material={plastic_black}
        position={[-2.658, 2.299, 0.178]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[-1, -0.075, -1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border001.geometry}
        position={[0.048, -0.292, -0.025]}
      >
        <meshPhongMaterial color="#BAE6FC" opacity={0.5} transparent />
      </mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border001.geometry}
        material={plastic_black}
        position={[0.048, -0.292, -0.225]}
      >
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screenLight.geometry}
        material={plastic_buttons_ab}
        position={[-2.58, 3.305, 0.782]}
        scale={0.106}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.startButton.geometry}
        material={plastic_buttons_selStart}
        position={[-1.299, -3.96, 0.963]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Decal-b'].geometry}
        material={materials['Gameboy b']}
        position={[1.801, -3.013, 1.016]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.35, 0.426, 0.35]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Decal-logo'].geometry}
        material={materials['Gameboy logo']}
        position={[-0.831, 0.023, 1.015]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.525}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Decal-screen'].geometry}
        material={materials['Gameboy Screen Decal']}
        position={[0.022, 4.825, 0.908]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.165}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Decal-Select'].geometry}
        material={materials['Gameboy select']}
        position={[-0.825, -4.071, 1.016]}
        rotation={[Math.PI / 2, 0.46, 0]}
        scale={0.144}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Decal-Serial'].geometry}
        material={materials['Gameboy serial']}
        position={[0.126, 3.03, -1.55]}
        rotation={[Math.PI / 2, -0.011, -3.142]}
        scale={[0.403, 0.31, 0.403]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Decal-Start'].geometry}
        material={materials['Gameboy start']}
        position={[0.492, -4.067, 1.016]}
        rotation={[Math.PI / 2, 0.51, 0]}
        scale={0.136}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Decal-a'].geometry}
        material={materials.Gameboy_a}
        position={[3.072, -2.487, 1.016]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.35, 0.367, 0.35]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Decal-tag'].geometry}
        material={materials.Gameboy_tag}
        position={[0.043, 1.547, -1.542]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={1.751}
      />
    </group>
  )
}

useGLTF.preload('models/gameboy.glb')

