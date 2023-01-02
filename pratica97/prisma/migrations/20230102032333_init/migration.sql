-- CreateTable
CREATE TABLE `funcionarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `sobrenome` VARCHAR(255) NOT NULL,
    `salario` FLOAT NOT NULL,
    `cargo` VARCHAR(255) NOT NULL,
    `idade` INTEGER NOT NULL,

    UNIQUE INDEX `funcionarios_nome_key`(`nome`),
    UNIQUE INDEX `funcionarios_sobrenome_key`(`sobrenome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
