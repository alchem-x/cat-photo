buildscript {
    repositories {
        google()
        mavenCentral()
    }
    dependencies {
        classpath("com.android.tools.build:gradle:7.0.4")
    }
}

tasks {
    register<Delete>("clean") {
        delete(rootProject.buildDir)
    }
}