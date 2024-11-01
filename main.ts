/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ali Elouasbi
 * Created on: Oct 2024
 * This program controls a wheel
*/

// setup
basic.showIcon(IconNames.Happy)

// loop forever
while (true) {

// Button A functionality
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Yes)
        robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B2) 
        basic.showIcon(IconNames.Happy)
    }

    // Button B functionality
    if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Yes)
        robotbit.StpCarMove(10, 48)
        basic.pause(500) 
        robotbit.StpCarMove(-10, 48)
        basic.showIcon(IconNames.Happy)
    }
}
