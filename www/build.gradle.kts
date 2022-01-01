tasks {
    register<Exec>("setup") {
        commandLine("bash", "-c", "npx pnpm install")
    }

    register("check") {
        if (!file("node_modules").exists()) {
            dependsOn("setup")
        }
    }

    register<Exec>("build") {
        dependsOn("check")
        commandLine("bash", "-c", "npm run build")
    }

    register<Exec>("clean") {
        dependsOn("check")
        commandLine("bash", "-c", "npm run clean")
    }
}