interface Bird {
  eat(): void;
}

interface FlyingBird {
  fly(): number;
}

interface RuningBird {
  run(): void;
}

interface SwimmerBird {
  swim(): void;
}

class Tucan implements Bird, FlyingBird {
  public fly(): number { return 200; }
  public eat(): void {}
}

class Humminbird implements Bird, FlyingBird {
  public fly(): number { return 400; }
  public eat(): void {}
}

class Ostrich implements Bird, RuningBird {
  public eat(): void {}
  public run(): void {}
}

class Penguin implements Bird, SwimmerBird {
  public eat(): void {}
  public swim(): void {}
}