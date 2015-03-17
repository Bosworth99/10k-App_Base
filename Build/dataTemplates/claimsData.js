module.exports = {
    template: {
        TotalRowCount: '{%= global.randomNum(5, 30) %}',
        Claims: {
            ClaimNo:'{%= global.generateId("Claim") %}',
            StatusCode:'{%= global.randomNum(0, 2) %}',
            SubStatusCode:'{%= global.randomNum(0, 2) %}',
            Status:'{%= global.chooseFromList(["Open", "Closed", "Denied"]) %}',
            SubStatus:'{%= global.chooseFromList(["Allowed", "Awaiting review"]) %}',
            Name: '{%= ipsum.name %}',
            Type:'{%= global.chooseFromList(["Compensable", "Medical Only", "Not yet determined"]) %}',
            DateOfInjury:'{%= global.randomDate(new Date("3/15/2014"), new Date("9/15/2014")) %}',
            ReturnWorkDate: '{%= global.randomDate(new Date("9/15/2014"), new Date("12/15/2014")) %}',
            LastDateWorked: '{%= global.randomDate(new Date("3/15/2014"), new Date("6/15/2014")) %}',
            ClaimLastDecisionDate: '{%= global.randomDate(new Date("8/15/2014"), new Date("12/15/2014")) %}',
            ClaimOpenDate:'{%= global.randomDate(new Date("1/15/2014"), new Date("3/15/2014")) %}',
            ActualCost:'{%= global.randomNum(1000, 2500) %}',
            EstimatedCost:'{%= global.randomNum(3000, 7500) %}',
            ROAComplete: '{%= global.randomBool() %}',
            ClaimManager: {
                Name: '{%= ipsum.name %}',
                Phone: "3609023344"
            },
            VocationalConsultant: {
                Name: '{%= ipsum.name %}',
                Phone: "3609023344",
                ThroughDate:'{%= global.randomDate(new Date("1/1/2014"), new Date("9/15/2014")) %}'
            },
            LastTimelossPayment: {
                Amount:'{%= global.randomNum(1000, 2500) %}',
                PaymentDate:'{%= global.randomDate(new Date("6/15/2014"), new Date("9/15/2014")) %}'
            }
        }
    },
    repetitions: {
        'Claims': 10
    },
    repeat: 1
}