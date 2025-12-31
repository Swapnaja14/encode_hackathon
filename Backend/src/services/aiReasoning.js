export function extractIngredients (type, content) {
    if (type === "image") {
        return content.replace("Ingredients:","").split(",").map(i => i.trim());
    }
    return ["Sugar", "Palm Oil", "Milk Solids", "E471", "E432"]
}

export function inferIntent(ingredients) {
    const intent = [];
    if (ingredients.includes("E471")) intent.push("gut-health");
    if (ingredients.includes("Sugar")) intent.push("processed food concern");

    return intent.length? intent : ["general health"];
}

export function reasonAboutIngredients(ingredients) {
    const whatMatters = [];
    let uncertainty = "";

    if (ingredients.includes("E471")) {
        whatMatters.push(
            "E471 may cause gut discomfort in sensitive individuals"
        );
        uncertainty = "Scientific evidence on emulsifiers and gut health is still evolving";
    }

    if (ingredients.includes("Sugar")) {
        whatMatters.push("High Sugar intake increases metabolic risk");
    }

    return {
        whatMatters,
        tradeOffs: "Occasional consumption is unlikely to cause harm for most people.",
        uncertainty,
        finalExplanation: "This product is generally safe if eaten occasionally, but frequent intake may not be ideal if you have gut sensitivity."
    };
}

export function generateFollowUp(context, question) {   
    if (question.toLowerCase().includes("daily")) {
        return "Daily consumption may increase risk over time. Occasional intake is a safer choice.";
    }
    return "Based on current evidence, moderate consumption is generally acceptable";
}