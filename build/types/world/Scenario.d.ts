import { World } from '../world/World';
import { LoadingManager } from '../core/LoadingManager';
import * as THREE from 'three';
export declare class Scenario {
    id: string;
    name: string;
    spawnAlways: boolean;
    default: boolean;
    world: World;
    descriptionTitle: string;
    descriptionContent: string;
    private rootNode;
    private spawnPoints;
    private invisible;
    private initialCameraAngle;
    private isRace;
    private lap;
    private justLapped;
    private justStarted;
    private playerPosition;
    private race;
    private justLappedTunnel1;
    private justLappedTunnel2;
    constructor(root: THREE.Object3D, world: World);
    displayLap(): void;
    checkLap(playerPosition: THREE.Vector3): void;
    checkLapT(playerPosition: THREE.Vector3): void;
    checkLapF(playerPosition: THREE.Vector3): void;
    createLaunchLink(): void;
    launch(loadingManager: LoadingManager, world: World): void;
}
