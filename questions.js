const questionBank = [

    {
        id: 1,
        category: "Environmental Noise",
        difficulty: "graduate",
        title: "Fixed plant assessment",
        description:
            "A rooftop plant installation produces an assessed level of 42 dB at the nearest noise-sensitive receptor. The stated project criterion is 38 dB.",
        data: [
            {
                label: "Assessed level",
                value: "42 dB"
            },
            {
                label: "Project criterion",
                value: "38 dB"
            }
        ],
        answers: [
            "The result is 4 dB below the criterion",
            "The result is 4 dB above the criterion",
            "The result is equal to the criterion",
            "The result cannot be compared"
        ],
        correctAnswer: 1,
        explanation:
            "The assessed level of 42 dB is 4 dB higher than the stated project criterion of 38 dB.",
        learningPoint:
            "Subtract the criterion from the assessed level: 42 - 38 = 4 dB."
    },

    {
        id: 2,
        category: "Construction Noise",
        difficulty: "graduate",
        title: "Daytime construction prediction",
        description:
            "Construction noise is predicted to be 72 dB LAeq,T at a residential receptor. The stated daytime project limit is 75 dB LAeq,T.",
        data: [
            {
                label: "Predicted level",
                value: "72 dB LAeq,T"
            },
            {
                label: "Project limit",
                value: "75 dB LAeq,T"
            }
        ],
        answers: [
            "The prediction is 3 dB above the limit",
            "The prediction is 3 dB below the limit",
            "The prediction exceeds the limit by 147 dB",
            "The two values are identical"
        ],
        correctAnswer: 1,
        explanation:
            "The predicted level is 3 dB below the stated project limit.",
        learningPoint:
            "For this simplified comparison, 75 - 72 = 3 dB below the limit."
    },

    {
        id: 3,
        category: "Vibration",
        difficulty: "graduate",
        title: "Construction vibration result",
        description:
            "The highest predicted peak particle velocity at a building is 0.7 mm/s. The stated project criterion is 1.0 mm/s PPV.",
        data: [
            {
                label: "Predicted PPV",
                value: "0.7 mm/s"
            },
            {
                label: "Project criterion",
                value: "1.0 mm/s"
            }
        ],
        answers: [
            "The prediction is 0.3 mm/s below the criterion",
            "The prediction is 0.3 mm/s above the criterion",
            "The prediction is 1.7 mm/s above the criterion",
            "PPV cannot be expressed in mm/s"
        ],
        correctAnswer: 0,
        explanation:
            "The predicted PPV is 0.3 mm/s below the stated project criterion.",
        learningPoint:
            "PPV means peak particle velocity and is commonly expressed in mm/s."
    },

    {
        id: 4,
        category: "Survey Planning",
        difficulty: "graduate",
        title: "Adverse weather conditions",
        description:
            "During an attended environmental noise survey, wind speeds increase above the maximum condition permitted by the agreed survey methodology.",
        data: [
            {
                label: "Survey status",
                value: "In progress"
            },
            {
                label: "Weather",
                value: "Outside agreed conditions"
            }
        ],
        answers: [
            "Ignore the weather and continue without recording it",
            "Increase every measured level by 5 dB",
            "Record the conditions and pause or reconsider the measurements",
            "Delete all project information immediately"
        ],
        correctAnswer: 2,
        explanation:
            "Weather conditions outside the agreed methodology can affect measurement quality. The conditions should be recorded and the affected measurements should be paused or reviewed.",
        learningPoint:
            "Survey notes should clearly document weather, site activity and anything that may affect data quality."
    },

    {
        id: 5,
        category: "Instrumentation",
        difficulty: "graduate",
        title: "Pre-survey calibration",
        description:
            "You have installed a sound level meter at the monitoring location and are about to begin measurements.",
        data: [
            {
                label: "Equipment",
                value: "Sound level meter"
            },
            {
                label: "Survey stage",
                value: "Before measurement"
            }
        ],
        answers: [
            "Perform and record an acoustic calibration check",
            "Change the microphone position every minute",
            "Turn off time synchronisation",
            "Remove the windscreen"
        ],
        correctAnswer: 0,
        explanation:
            "An acoustic calibration check should be completed and recorded in accordance with the survey methodology before measurement.",
        learningPoint:
            "Calibration checks help confirm that the measurement system is operating as expected."
    },

    {
        id: 6,
        category: "Instrumentation",
        difficulty: "graduate",
        title: "Post-survey calibration drift",
        description:
            "The calibration check at the end of a survey differs materially from the value recorded before the survey.",
        data: [
            {
                label: "Pre-check",
                value: "Expected value"
            },
            {
                label: "Post-check",
                value: "Materially different"
            }
        ],
        answers: [
            "Automatically publish the data without comment",
            "Review the equipment, calibration records and validity of the affected data",
            "Change the post-check result to match the pre-check",
            "Add the two calibration values together"
        ],
        correctAnswer: 1,
        explanation:
            "A material calibration difference may indicate an equipment or measurement issue. The affected data and equipment records should be investigated.",
        learningPoint:
            "Do not alter results to make them appear acceptable. Record and investigate unexpected differences."
    },

    {
        id: 7,
        category: "Data Analysis",
        difficulty: "graduate",
        title: "Understanding LAmax",
        description:
            "A short, distinct noise event produces the highest sound level recorded during a monitoring interval.",
        data: [
            {
                label: "Required descriptor",
                value: "Maximum sound level"
            },
            {
                label: "Event type",
                value: "Short noise event"
            }
        ],
        answers: [
            "LAmax",
            "LA90",
            "Total survey duration",
            "Wind direction"
        ],
        correctAnswer: 0,
        explanation:
            "LAmax represents the maximum A-weighted sound level recorded during the relevant measurement period, subject to the specified time weighting.",
        learningPoint:
            "Always report the measurement descriptor, time weighting and measurement period where relevant."
    },

    {
        id: 8,
        category: "Data Analysis",
        difficulty: "graduate",
        title: "Understanding LA90",
        description:
            "You need a statistical descriptor representing the sound level exceeded for 90% of a measurement period.",
        data: [
            {
                label: "Exceedance percentage",
                value: "90%"
            },
            {
                label: "Required descriptor",
                value: "Statistical sound level"
            }
        ],
        answers: [
            "LAmax",
            "LA90",
            "LA10 minus LAmax",
            "PPV"
        ],
        correctAnswer: 1,
        explanation:
            "LA90 is the A-weighted sound level exceeded for 90% of the measurement period.",
        learningPoint:
            "LA90 is often used when describing relatively steady background sound, although its suitability depends on the assessment context."
    },

    {
        id: 9,
        category: "Data Analysis",
        difficulty: "consultant",
        title: "Logarithmic sound addition",
        description:
            "Two independent and incoherent sound sources each produce 60 dB at the same receptor. Assume no other sources contribute.",
        data: [
            {
                label: "Source 1",
                value: "60 dB"
            },
            {
                label: "Source 2",
                value: "60 dB"
            }
        ],
        answers: [
            "60 dB",
            "63 dB",
            "120 dB",
            "30 dB"
        ],
        correctAnswer: 1,
        explanation:
            "Two equal, independent sound levels combine to produce an increase of approximately 3 dB, giving approximately 63 dB.",
        learningPoint:
            "Decibels are logarithmic and should not ordinarily be added arithmetically."
    },

    {
        id: 10,
        category: "Data Analysis",
        difficulty: "consultant",
        title: "Dominant sound source",
        description:
            "One source produces 70 dB at a receptor and a second independent source produces 60 dB.",
        data: [
            {
                label: "Source 1",
                value: "70 dB"
            },
            {
                label: "Source 2",
                value: "60 dB"
            }
        ],
        answers: [
            "The combined level is exactly 130 dB",
            "The combined level is approximately 70.4 dB",
            "The combined level is approximately 65 dB",
            "The quieter source reduces the total to 60 dB"
        ],
        correctAnswer: 1,
        explanation:
            "A source 10 dB below the dominant source makes a relatively small contribution. The combined level is approximately 70.4 dB.",
        learningPoint:
            "When sources differ substantially, the louder source dominates the logarithmic total."
    },

    {
        id: 11,
        category: "Survey Planning",
        difficulty: "consultant",
        title: "Unrepresentative activity",
        description:
            "During a baseline survey, temporary roadworks occur immediately beside the monitoring position. The roadworks are not part of the usual acoustic environment.",
        data: [
            {
                label: "Survey purpose",
                value: "Representative baseline"
            },
            {
                label: "Observed activity",
                value: "Temporary roadworks"
            }
        ],
        answers: [
            "Treat all roadworks noise as permanently representative",
            "Document the activity and review the affected periods before using the data",
            "Delete the entire survey without inspection",
            "Report only the highest instantaneous level"
        ],
        correctAnswer: 1,
        explanation:
            "The temporary activity should be documented, and the affected periods should be reviewed when judging whether the data represent typical conditions.",
        learningPoint:
            "Contextual observations are essential when interpreting measured sound levels."
    },

    {
        id: 12,
        category: "Project Communication",
        difficulty: "consultant",
        title: "Missing project information",
        description:
            "A client requests a construction noise assessment but has not provided working hours, plant quantities, operating durations or receptor information.",
        data: [
            {
                label: "Available information",
                value: "Incomplete"
            },
            {
                label: "Requested output",
                value: "Noise assessment"
            }
        ],
        answers: [
            "Invent plant quantities without disclosing assumptions",
            "Request the missing information and clearly document any agreed assumptions",
            "Issue a definitive conclusion immediately",
            "Assume all equipment operates continuously for a full year"
        ],
        correctAnswer: 1,
        explanation:
            "The missing information should be requested. Any assumptions used to progress the assessment should be reasonable, agreed where appropriate and clearly documented.",
        learningPoint:
            "Transparent assumptions make an assessment traceable and easier to update."
    },

    {
        id: 13,
        category: "Quality Assurance",
        difficulty: "consultant",
        title: "Unusual monitoring result",
        description:
            "A monitoring dataset contains an isolated result substantially higher than the surrounding periods.",
        data: [
            {
                label: "Dataset feature",
                value: "Isolated high result"
            },
            {
                label: "Context",
                value: "Cause not yet known"
            }
        ],
        answers: [
            "Delete it immediately because it looks inconvenient",
            "Investigate field notes, audio, weather and activity records before deciding how to treat it",
            "Replace it with the dataset average",
            "Double every other result"
        ],
        correctAnswer: 1,
        explanation:
            "An unusual result should be investigated using the available contextual evidence before deciding whether it is valid, representative or affected by an extraneous event.",
        learningPoint:
            "A high result is not automatically invalid. Data treatment should be evidence-based and documented."
    },

    {
        id: 14,
        category: "Vibration",
        difficulty: "consultant",
        title: "Distance and vibration",
        description:
            "A vibration source moves farther away from a receptor, while the source activity and ground conditions remain otherwise unchanged.",
        data: [
            {
                label: "Change",
                value: "Greater source-receptor distance"
            },
            {
                label: "Other variables",
                value: "Assumed unchanged"
            }
        ],
        answers: [
            "Vibration will always increase with distance",
            "Vibration would generally be expected to attenuate with distance",
            "Distance cannot have any relationship with vibration",
            "PPV automatically becomes a sound level"
        ],
        correctAnswer: 1,
        explanation:
            "Vibration would generally be expected to reduce with increasing distance, although the actual propagation depends on the source, ground conditions, frequency content and building response.",
        learningPoint:
            "Avoid applying a universal attenuation rate without a suitable method, data or project-specific evidence."
    },

    {
        id: 15,
        category: "Reporting",
        difficulty: "consultant",
        title: "Writing a defensible conclusion",
        description:
            "Your assessment predicts compliance with the stated project criterion, but the prediction depends on specific mitigation measures being implemented.",
        data: [
            {
                label: "Predicted outcome",
                value: "Compliance"
            },
            {
                label: "Dependency",
                value: "Mitigation required"
            }
        ],
        answers: [
            "State unconditional compliance and omit the mitigation",
            "State that compliance is predicted subject to the identified mitigation being implemented",
            "Remove the calculation from the report",
            "Describe the mitigation as optional even when it is necessary"
        ],
        correctAnswer: 1,
        explanation:
            "The conclusion should clearly state that the predicted outcome depends on the specified mitigation measures being implemented.",
        learningPoint:
            "Conclusions should reflect the conditions and assumptions on which the assessment depends."
    }

];