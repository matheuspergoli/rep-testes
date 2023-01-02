-- CreateTable
CREATE TABLE `funcionario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `sobrenome` VARCHAR(255) NOT NULL,
    `cargo` VARCHAR(255) NOT NULL,
    `salario` DOUBLE NOT NULL DEFAULT 0,
    `idade` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
