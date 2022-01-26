import Army from "./Army";

export default interface Battle {
  id: string;
  status: BattleStatus;
  armies: Army[];
  zipCode: string;
}

enum BattleStatus {
  PREPARING,
  READY,
  IN_PROGRESS,
  FINISHED,
}