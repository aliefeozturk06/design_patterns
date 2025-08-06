interface IProps {
  name: string;
  type: string;
}

class Teacher {
  properties: IProps;
  constructor(private props: IProps) {
    this.properties = props;
  }
}

class Assistant {
  properties: IProps;
  constructor(private props: IProps) {
    this.properties = props;
  }
}

class Custodian {
  properties: IProps;
  constructor(private props: IProps) {
    this.properties = props;
  }
}

class StaffFactory {
  create(data: IProps) {
    let obj: any;
    switch (data.type) {
      case "teacher":
        obj = new Teacher(data);
        break;
      case "assistant":
        obj = new Assistant(data);
        break;
      case "custodian":
        obj = new Custodian(data);
        break;
    }
    return obj;
  }
}

const school = new StaffFactory();
school.create({ type: "teacher", name: "Mehmet Tan" });
school.create({ type: "assistant", name: "Ali Efe Öztürk" });
school.create({ type: "teacher", name: "Arkın Bozkurt" });
