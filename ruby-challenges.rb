# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

##----------------- PSEUDO CODE ------------------
## create a method called letter_finder that takes the array and a string parameter
## use .select to select the string parameter and use .include? to find elements in the array that include the string parameter

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def letter_finder(beverages_array, string)
    beverages_array.select { |word| word.include? string }
end

puts letter_finder(beverages_array, letter_o)
puts letter_finder(beverages_array, letter_t)

# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

### ------------------------ PSEUDO CODE --------------------
## create a method called sum to sum up the values in the giving array 
## have a nums parameter
## use .inject method to add find the sum of a giving array 

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

def sum(nums)
    nums.inject(0, :+)
end

puts sum(nums_array1)
puts sum(nums_array2)

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

##---------------------------- Pseudo Code -------------------
# create class called Bike
# initialize model wheels and current_speed. 
# create a method that has string interpolation to show bike data. 

class Bike 
    def initialize(model)
        @model = model
        @wheels = 2
        @current_speed = 0
    end
    def bike_info
        "Current bike information: model: #{@model}, wheels: #{@wheels}, and current speed: #{@current_speed} mph"
    end

    def pedal_faster(pedaling)
        @current_speed += pedaling    
    end

    def brake(braking)
        if @current_speed - braking <=0
            @current_speed = 0
        else
            @current_speed -= braking
        end
    end
end

my_bike = Bike.new("Canyon Endurance CF")
puts my_bike.bike_info

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

## ------------------- PSEUDO CODE --------------
## create pedal_faster method
## give it a paramater with the name of pedaling 
## use += with @current_speed to add and increment the speed as needed 
## create brake method giving it a parameter with the name of braking
## use <= 0 to avoid negatives and -= to subtract and continue to decrement speed 

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

puts my_bike.pedal_faster(10)
puts my_bike.pedal_faster(18)
puts my_bike.brake(5)
puts my_bike.brake(25) 