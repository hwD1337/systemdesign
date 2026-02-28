class Step:
    def do(self):
        raise NotImplementedError
    def compensate(self):
        raise NotImplementedError

class Payment(Step):
    def do(self):
        print("Payment processed")
    def compensate(self):
        print("Payment refunded")

class Inventory(Step):
    def do(self):
        print("Inventory reserved")
    def compensate(self):
        print("Inventory released")

class Shipping(Step):
    def do(self):
        print("Shipping scheduled")
        raise Exception("Shipping failed!")  # simulate failure
    def compensate(self):
        print("Shipping canceled")

class SagaOrchestrator:
    def __init__(self, steps):
        self.steps = steps
        self.completed = []

    def execute(self):
        try:
            for step in self.steps:
                step.do()
                self.completed.append(step)
            print("Saga completed successfully")
        except Exception as e:
            print(f"Saga failed: {e}")
            for step in reversed(self.completed):
                step.compensate()

# Run checkout saga
saga = SagaOrchestrator([Payment(), Inventory(), Shipping()])
saga.execute()
