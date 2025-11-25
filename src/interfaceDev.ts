interface Developer <T> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releaseYear: string;
    };
    smartWatch: T
}

const poorDeveloper : Developer<{
    heartRate: string;
    stopWatch: boolean
}> = {
    name: "Mr. Poor",
    salary: 20000,
    device: {
        brand: "Dell",
        model: "T5400",
        releaseYear: "2025"
    },

    smartWatch: {
        heartRate: "normal",
        stopWatch: true
    }

}

const richDeveloper : Developer<{
    heartRate: string,
    callSupport: boolean,
    calculator: boolean,
    aiFeature: boolean
}> = {
    name: "Mr. Rich",
    salary: 200000,
    device: {
        brand: "Apple",
        model: "Pro-2025",
        releaseYear: "2025"
    },
    
    smartWatch: {
        heartRate: "Normal",
        callSupport: true,
        calculator: true,
        aiFeature: true
    }
}