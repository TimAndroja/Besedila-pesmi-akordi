import Link from "next/link";
import { useRouter } from "next/router";

import React, { Component, useEffect } from "react";
import Content_wrapper from "../../components/besedila/Content_wrapper";
import Layout_noh1 from "../../components/Layout_noh1";
import axios from "axios";

function Besedila() {
  const router = useRouter();

  return (
    <Layout_noh1>
      <h1>{router.query.id}</h1>

      <Content_wrapper />
    </Layout_noh1>
  );
}

export default Besedila;
