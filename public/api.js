const API = {
    async getLastWorkout() {
        let res;

        res = await fetch("/api/workouts");

        let json;

        json = await res.json();

        return json[json.length - 1];
    },
    async addExercise(data) {
        let id;

        id = location.search.split("=")[1];

        let res;

        res = await fetch("/api/workouts/" + id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        let json;

        json = await res.json();

        return json;
    },
    async createWorkout() {
        const res = await fetch("/api/workouts", {
            method: "POST",
            headers: { "Content-Type": "application/json" }
        });

        let json;

        json = await res.json();

        return json;
    },

    async getWorkoutsInRange() {
        let res;
        res = await fetch(`/api/workouts/range`);
        let json;

        json = await res.json();

        return json;
    },
};