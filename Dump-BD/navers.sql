-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 11-Mar-2021 às 20:57
-- Versão do servidor: 10.4.17-MariaDB
-- versão do PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `navers`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `registrations`
--

CREATE TABLE `registrations` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `age` varchar(15) DEFAULT NULL,
  `projects` varchar(45) DEFAULT NULL,
  `office` varchar(45) DEFAULT NULL,
  `time` varchar(15) DEFAULT NULL,
  `url` varchar(2000) DEFAULT NULL,
  `created_at` date NOT NULL DEFAULT current_timestamp(),
  `updated_at` date NOT NULL DEFAULT current_timestamp(),
  `user_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `registrations`
--

INSERT INTO `registrations` (`id`, `name`, `age`, `projects`, `office`, `time`, `url`, `created_at`, `updated_at`, `user_id`) VALUES
(41, 'Francisco Kiteculo', '25 anos ', 'Ambev', 'Back-end Developer', '15 anos', 'https://media-exp1.licdn.com/dms/image/C4E03AQEmvibyEAUApA/profile-displayphoto-shrink_200_200/0/1610754120474?e=1619654400&v=beta&t=c7SLnmu5QrAtMO3WPl3QtvfIFLNZz1aAIUWquvuolLg', '2021-03-11', '2021-03-11', NULL),
(40, 'Pedro Lima Silvestre', '42 anos', 'Ids-Estudadnte', 'Financeiro', '4 anos', 'https://media-exp1.licdn.com/dms/image/C4E03AQEmvibyEAUApA/profile-displayphoto-shrink_200_200/0/1610754120474?e=1619654400&v=beta&t=c7SLnmu5QrAtMO3WPl3QtvfIFLNZz1aAIUWquvuolLg', '2021-03-11', '2021-03-11', NULL),
(39, 'Juliano Reis', '32 anos', 'Ambev', 'Node.js developer', '3 anos', 'https://media-exp1.licdn.com/dms/image/C4E03AQEmvibyEAUApA/profile-displayphoto-shrink_200_200/0/1610754120474?e=1619654400&v=beta&t=c7SLnmu5QrAtMO3WPl3QtvfIFLNZz1aAIUWquvuolLg', '2021-03-11', '2021-03-11', NULL),
(38, 'Juliano Reis', '25 anos', 'Navers', 'Front-end Developer', '2 anos', 'https://media-exp1.licdn.com/dms/image/C4E03AQEmvibyEAUApA/profile-displayphoto-shrink_200_200/0/1610754120474?e=1619654400&v=beta&t=c7SLnmu5QrAtMO3WPl3QtvfIFLNZz1aAIUWquvuolLg', '2021-03-11', '2021-03-11', NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `id` int(45) NOT NULL,
  `cpf` varchar(15) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` int(45) DEFAULT NULL,
  `created_at` date DEFAULT current_timestamp(),
  `updated_at` date NOT NULL DEFAULT current_timestamp(),
  `user_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `cpf`, `email`, `password`, `created_at`, `updated_at`, `user_id`) VALUES
(1, '2147483647', 'catianonorberto@gmail.com', 123456, '2021-03-08', '2021-03-08', NULL),
(2, '2147483647', 'catianonorberto@gmail.com', 123456, '2021-03-08', '2021-03-08', NULL),
(3, '63295', 'catiano@gmail.com', 1234, '2021-03-09', '2021-03-09', NULL),
(4, '06329524742', 'catianonorberto@gmail.com', 123456, '2021-03-10', '2021-03-10', NULL),
(5, '06329524742', 'catianonorberto@gmail.com', 123456, '2021-03-10', '2021-03-10', NULL),
(6, '06329524742', 'catianonorberto@gmail.com', 123456, '2021-03-10', '2021-03-10', NULL);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `registrations`
--
ALTER TABLE `registrations`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `registrations`
--
ALTER TABLE `registrations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(45) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
