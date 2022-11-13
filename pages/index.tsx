import { NextPage } from "next"
import React from "react"
import Header from "../components/HomePage/Header"
import Head from 'next/head'
import QrForm from "../components/QRform.tsx"
import HomeContents from "../components/HomeContents/HomeContents"
import ResultModal from "../components/resultModal"
import HomeWrapper from "../components/HOC/HomeWrapper"




const Home = (): JSX.Element => {

  return <div className="w-full h-full">
    <Head>
      <title>QRmastary</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Island+Moments&display=swap" rel="stylesheet"></link>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Island+Moments&display=swap" rel="stylesheet"></link>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"></link>
      <link rel="shortcut icon" href="https://res.cloudinary.com/djibri-tech/image/upload/v1666910995/QRmastary/logo_syaii2.png" type="image/x-icon" ></link>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"></link>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />

    </Head>

    <Header />
    <ResultModal />
    <HomeWrapper>
      <QrForm />
      <HomeContents />
    </HomeWrapper>

  </div>
}

export default Home
