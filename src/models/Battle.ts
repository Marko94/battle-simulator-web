import Army from "./Army";

export default interface Battle {
  id: string;
  status: BattleStatus;
  armies: Army[];
}

enum BattleStatus {
  PREPARING= "PREPARING",
  READY= "READY",
  IN_PROGRESS= "IN_PROGRESS",
  FINISHED= "FINISHED",
}