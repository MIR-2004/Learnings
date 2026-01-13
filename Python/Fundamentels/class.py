class Employee:
    name = "Mir"
    salary = 17000

    def greet(self):
        print(f"good morning {self.name}")

    @staticmethod
    def hello():
        print("Hello")

god = Employee()

god.greet()
god.hello()