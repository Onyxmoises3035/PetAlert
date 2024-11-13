-- CreateTable
CREATE TABLE `usuario` (
    `usu_id` INTEGER NOT NULL AUTO_INCREMENT,
    `usu_adm` INTEGER NOT NULL,
    `usu_name` VARCHAR(191) NOT NULL,
    `usu_email` VARCHAR(191) NOT NULL,
    `usu_password` VARCHAR(191) NOT NULL,
    `usu_telefono` VARCHAR(191) NOT NULL,
    `usu_telrepuesto` VARCHAR(191) NULL,

    UNIQUE INDEX `usuario_usu_name_key`(`usu_name`),
    UNIQUE INDEX `usuario_usu_email_key`(`usu_email`),
    PRIMARY KEY (`usu_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `edad` (
    `edad_id` INTEGER NOT NULL AUTO_INCREMENT,
    `edad_tiempo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`edad_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `raza` (
    `raza_id` INTEGER NOT NULL AUTO_INCREMENT,
    `raza_tipo` VARCHAR(191) NOT NULL,
    `raza_nombre` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`raza_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `colorP` (
    `colorP_id` INTEGER NOT NULL AUTO_INCREMENT,
    `colorP_colores` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`colorP_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `patron` (
    `patron_id` INTEGER NOT NULL AUTO_INCREMENT,
    `patron_combinacion` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`patron_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `colorOjos` (
    `colorOjos_id` INTEGER NOT NULL AUTO_INCREMENT,
    `colorOjos_Ojos` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`colorOjos_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pelaje` (
    `pelaje_id` INTEGER NOT NULL AUTO_INCREMENT,
    `pelaje_patron` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`pelaje_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mascotas` (
    `mac_id` INTEGER NOT NULL AUTO_INCREMENT,
    `mas_nombre` VARCHAR(191) NOT NULL,
    `mas_sexo` VARCHAR(191) NOT NULL,
    `mas_especie` VARCHAR(191) NOT NULL,
    `mas_edad` VARCHAR(191) NOT NULL,
    `mas_raza` VARCHAR(191) NOT NULL,
    `mas_colorP` VARCHAR(191) NOT NULL,
    `mas_patron` VARCHAR(191) NOT NULL,
    `mas_colorOjos` VARCHAR(191) NOT NULL,
    `mas_pelaje` VARCHAR(191) NOT NULL,
    `mas_particular` VARCHAR(191) NOT NULL,
    `mas_actitud` VARCHAR(191) NOT NULL,
    `mas_estatus` BOOLEAN NOT NULL,
    `mas_imgFron` VARCHAR(191) NOT NULL,
    `usu_id` INTEGER NOT NULL,

    PRIMARY KEY (`mac_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `coment` (
    `com_id` INTEGER NOT NULL AUTO_INCREMENT,
    `com_text` VARCHAR(191) NOT NULL,
    `com_fec` VARCHAR(191) NOT NULL,
    `com_hor` VARCHAR(191) NOT NULL,
    `com_usu` VARCHAR(191) NOT NULL,
    `mac_id` INTEGER NOT NULL,

    PRIMARY KEY (`com_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reporte` (
    `rep_id` INTEGER NOT NULL AUTO_INCREMENT,
    `rep_fec` VARCHAR(191) NOT NULL,
    `rep_hor` VARCHAR(191) NOT NULL,
    `rep_usu` VARCHAR(191) NOT NULL,
    `rep_pro` VARCHAR(191) NOT NULL,
    `rep_sta` VARCHAR(191) NOT NULL,
    `rep_nom` VARCHAR(191) NULL,

    PRIMARY KEY (`rep_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ticket` (
    `tic_id` INTEGER NOT NULL AUTO_INCREMENT,
    `tic_hor` VARCHAR(191) NOT NULL,
    `tic_fec` VARCHAR(191) NOT NULL,
    `tic_pri` VARCHAR(191) NOT NULL,
    `tic_tipo` VARCHAR(191) NOT NULL,
    `tic_nom` VARCHAR(191) NOT NULL,
    `rep_id` INTEGER NOT NULL,

    PRIMARY KEY (`tic_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `mascotas` ADD CONSTRAINT `mascotas_usu_id_fkey` FOREIGN KEY (`usu_id`) REFERENCES `usuario`(`usu_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `coment` ADD CONSTRAINT `coment_mac_id_fkey` FOREIGN KEY (`mac_id`) REFERENCES `mascotas`(`mac_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ticket` ADD CONSTRAINT `ticket_rep_id_fkey` FOREIGN KEY (`rep_id`) REFERENCES `reporte`(`rep_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
