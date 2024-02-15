export interface Member {
  id? : number,
  num? : number,
  username? : string,
  name? : string,
  familyName? : string,
  accessionDate? : Date,
  nationality? : string,
  identityDocument? : string,
  identityNumber? : string
}

export class CMember implements Member {
  constructor(
    id? : number,
    num? : number,
    username? : string,
    name? : string,
    familyName? : string,
    accessionDate? : Date,
    nationality? : string,
    identityDocument? : string,
    identityNumber? : string
  ){}
}
