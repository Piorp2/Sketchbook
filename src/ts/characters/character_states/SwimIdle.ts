import
{
	CharacterStateBase,
	EndWalk,
	JumpRunning,
	Walk,
} from './_stateLibrary';
import { Character } from '../Character';

export class SwimIdle extends CharacterStateBase
{
	constructor(character: Character)
	{
		super(character);

		this.canEnterVehicles = true;

		this.character.velocitySimulator.mass = 10;
		this.character.rotationSimulator.damping = 0.8;
		this.character.rotationSimulator.mass = 50;

		this.character.setArcadeVelocityTarget(1.4);
		this.playAnimation('ArmatureAction', 0.1);
	}

	public update(timeStep: number): void
	{
		super.update(timeStep);
		this.character.setCameraRelativeOrientationTarget();
		//this.fallInAir();
	}
/*
	public onInputChange(): void
	{
		super.onInputChange();
	}
    */
}