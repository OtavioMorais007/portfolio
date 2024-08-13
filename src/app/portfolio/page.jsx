"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-indigo-300 to-blue-300",
    title: "Next Social Media",
    desc: "Projeto desenvolvido em Next.js 15, aproveitando as novas funcionalidades do React 19 para construir uma aplicação moderna e eficiente. O código foi escrito em TypeScript para garantir maior previsibilidade e robustez. A interface foi estilizada com Tailwind CSS, oferecendo um design limpo e responsivo. No backend, Prisma e PostgreSQL foram utilizados para gerenciar os dados de forma eficaz e escalável. O projeto também faz uso do Zod para validação de schemas, assegurando a integridade dos dados.",
    img: "/site1.PNG",
    link: "https://github.com/OtavioMorais007/social-media",
  },
  {
    id: 2,
    color: "from-blue-300 to-cyan-800",
    title: "React Estate",
    desc: "Projeto desenvolvido para uma imobiliária, utilizando React no frontend, com autenticação segura via JWT. A interface foi estilizada com SASS, proporcionando um design moderno e responsivo. Possui um chat em tempo real usando Socket.IO, permitindo comunicação instantânea entre usuários. No backend, utilizamos Prisma junto com Express para o gerenciamento eficiente de um banco de dados não relacional, garantindo uma estrutura sólida e escalável para a aplicação.",
    img: "/site2.PNG",
    link: "https://github.com/OtavioMorais007/react-estate",
  },
  {
    id: 3,
    color: "from-cyan-800 to-blue-600",
    title: "otavioAI",
    desc: "Este projeto é um ChatBot alimentado pela tecnologia Gemini, capaz de analisar imagens e fornecer assistência em código. O frontend foi desenvolvido em React, utilizando o react-router-dom para navegação eficiente entre páginas e o react-query para realizar buscas otimizadas na API. No backend, utilizei o Mongoose para a criação de modelos e a conexão com o banco de dados, garantindo uma integração robusta e eficaz.",
    img: "/site3.PNG",
    link: "https://github.com/OtavioMorais007/ai",
  },
  {
    id: 4,
    color: "from-blue-600 to-indigo-300",
    title: "WorldWise",
    desc: "Este site permite o registro de viagens com a integração de um mapa interativo, tornando a experiência do usuário visual e intuitiva. Desenvolvido com React e utilizando a biblioteca Leaflet para o mapa, o projeto oferece uma navegação fluida com o react-router-dom e permite a seleção de datas com o react-datepicker.  ",
    img: "/site4.PNG",
    link: "https://github.com/OtavioMorais007/worldwise",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          Meus trabalhos
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link
                    href={item.link}
                    target="_blank"
                    className="flex justify-end"
                  >
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                      Ver projeto
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Você tem um projeto?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Desenvolvedor FullStack
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contato"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Contrate-me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
