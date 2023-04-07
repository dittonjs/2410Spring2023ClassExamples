package com.example.androidcounter

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button


class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        println(savedInstanceState!!.getChar("name"))

        setContentView(R.layout.activity_main)
        val button: Button = findViewById(R.id.myButton)

        button.setOnClickListener {
            println("Hello, world!");
        }

    }
}
