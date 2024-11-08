import * as CANNON from 'cannon';
import { Vehicle } from './Vehicle';
import { IControllable } from '../interfaces/IControllable';
import { EntityType } from '../enums/EntityType';
export declare class Boat extends Vehicle implements IControllable {
    entityType: EntityType;
    drive: string;
    isBoat: boolean;
    get speed(): number;
    private _speed;
    speed2: number;
    backspeed: number;
    private steeringWheel;
    private steeringSimulator;
    private gear;
    private shiftTimer;
    private timeToShift;
    private characterWantsToExit;
    su: any;
    constructor(gltf: any);
    updateWheelProps(property: any, value: any): void;
    updateCarSpeed(speed: any): void;
    noDirectionPressed(): boolean;
    update(timeStep: number): void;
    shiftUp(): void;
    shiftDown(): void;
    private goForward;
    physicsPreStep(body: CANNON.Body, car: Boat): void;
    onInputChange(): void;
    inputReceiverInit(): void;
    readCarData(gltf: any): void;
}
