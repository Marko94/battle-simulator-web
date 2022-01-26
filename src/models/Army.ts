export default interface Army {
  id: string;
  health: number;
  startingHealth: number;
  attackStrategy: AttackStrategy;
}

enum AttackStrategy {
  RANDOM,
  WEAKEST,
  STRONGEST,
}