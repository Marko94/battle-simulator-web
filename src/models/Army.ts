export default interface Army {
  armyName: string;
  startingHealth: number;
  currentHealth: number;
  attackStrategy: AttackStrategy;
}

enum AttackStrategy {
  RANDOM= 'RANDOM',
  WEAKEST= 'WEAKEST',
  STRONGEST= 'STRONGEST',
}