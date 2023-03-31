import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model({ action }) {
  const group = useRef();
  const previousAction = usePrevious(action);
  const { nodes, materials, animations } = useGLTF("/animated.glb");
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    if (previousAction) {
      actions[previousAction].fadeOut(0.2);
      actions[action].stop();
    }
    actions[action].play();
    actions[action].fadeIn(0.2);
  }, [actions, action, previousAction]);
  return (
    <group ref={group} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <primitive object={nodes.mixamorigHips} />

        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top001_1.geometry}
          material={materials["Wolf3D_Outfit_Top.001"]}
          skeleton={nodes.Wolf3D_Outfit_Top001_1.skeleton}
          morphTargetDictionary={
            nodes.Wolf3D_Outfit_Top001_1.morphTargetDictionary
          }
          morphTargetInfluences={
            nodes.Wolf3D_Outfit_Top001_1.morphTargetInfluences
          }
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top001_2.geometry}
          material={materials["Wolf3D_Eye.001"]}
          skeleton={nodes.Wolf3D_Outfit_Top001_2.skeleton}
          morphTargetDictionary={
            nodes.Wolf3D_Outfit_Top001_2.morphTargetDictionary
          }
          morphTargetInfluences={
            nodes.Wolf3D_Outfit_Top001_2.morphTargetInfluences
          }
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top001_3.geometry}
          material={materials["Wolf3D_Skin.001"]}
          skeleton={nodes.Wolf3D_Outfit_Top001_3.skeleton}
          morphTargetDictionary={
            nodes.Wolf3D_Outfit_Top001_3.morphTargetDictionary
          }
          morphTargetInfluences={
            nodes.Wolf3D_Outfit_Top001_3.morphTargetInfluences
          }
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top001_4.geometry}
          material={materials["Wolf3D_Teeth.001"]}
          skeleton={nodes.Wolf3D_Outfit_Top001_4.skeleton}
          morphTargetDictionary={
            nodes.Wolf3D_Outfit_Top001_4.morphTargetDictionary
          }
          morphTargetInfluences={
            nodes.Wolf3D_Outfit_Top001_4.morphTargetInfluences
          }
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top001_5.geometry}
          material={materials["Wolf3D_Body.001"]}
          skeleton={nodes.Wolf3D_Outfit_Top001_5.skeleton}
          morphTargetDictionary={
            nodes.Wolf3D_Outfit_Top001_5.morphTargetDictionary
          }
          morphTargetInfluences={
            nodes.Wolf3D_Outfit_Top001_5.morphTargetInfluences
          }
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top001_6.geometry}
          material={materials["Wolf3D_Outfit_Bottom.001"]}
          skeleton={nodes.Wolf3D_Outfit_Top001_6.skeleton}
          morphTargetDictionary={
            nodes.Wolf3D_Outfit_Top001_6.morphTargetDictionary
          }
          morphTargetInfluences={
            nodes.Wolf3D_Outfit_Top001_6.morphTargetInfluences
          }
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top001_7.geometry}
          material={materials["Wolf3D_Outfit_Footwear.001"]}
          skeleton={nodes.Wolf3D_Outfit_Top001_7.skeleton}
          morphTargetDictionary={
            nodes.Wolf3D_Outfit_Top001_7.morphTargetDictionary
          }
          morphTargetInfluences={
            nodes.Wolf3D_Outfit_Top001_7.morphTargetInfluences
          }
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top001_8.geometry}
          material={materials["Wolf3D_Hair.001"]}
          skeleton={nodes.Wolf3D_Outfit_Top001_8.skeleton}
          morphTargetDictionary={
            nodes.Wolf3D_Outfit_Top001_8.morphTargetDictionary
          }
          morphTargetInfluences={
            nodes.Wolf3D_Outfit_Top001_8.morphTargetInfluences
          }
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top001_9.geometry}
          material={materials["Wolf3D_Glasses.001"]}
          skeleton={nodes.Wolf3D_Outfit_Top001_9.skeleton}
          morphTargetDictionary={
            nodes.Wolf3D_Outfit_Top001_9.morphTargetDictionary
          }
          morphTargetInfluences={
            nodes.Wolf3D_Outfit_Top001_9.morphTargetInfluences
          }
        />
      </group>
    </group>
  );
}

useGLTF.preload("/animated.glb");

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
