import React, { Component } from 'react'

export default class Homepage extends Component {
    render() {
        return (
            <div>
            <header class="header"> 
        <div class="header-content animated fadeIn delay-2s">
            <img class="logo" src="/src/img/mariameira-small2.png" srcset="/src/img/mmm2.png 2000w" alt="MM Logo" />
        </div>
    </header>
    <section>
    <h3 class="title">collections</h3>
    <div class="container grid-5 ">
        <div>
            <h3>#SUB</h3>
            <h5>BLOOM Contest</h5>
        </div>
        <div>
            <h3>MUTU</h3>
            <h5>SS19</h5>
        </div>
        <div>
            <h3>INFORMIS</h3>
            <h5>FW1920</h5>
        </div>
        <div>
            <h3>VOICE</h3>
            <h5>SS20</h5>
        </div>
        <div>
            <h3>SHADOW</h3>
            <h5>FW2021</h5>
        </div>
    </div>
    </section>

    <section class="about bg-light">
    <div class="container text-center">
      <div class="grid-2">
        <div class="center">
          <img class="logo-about" src="/src/img/logo-about.png" alt=""/>
        </div>
        <div>
          <h3 class="title">about</h3>
          <p>
            <span>Amet nihil magnam maxime dolor qui veritatis quaerat explicabo fugiat similique. Facilis ea reprehenderit laboriosam molestias odit officia. Facilis sunt harum tempore suscipit placeat beatae? Autem iure dignissimos maxime ducimus.</span>
          </p>
        </div>
      </div>
    </div>
  </section>
    </div>
        )
    }
}
