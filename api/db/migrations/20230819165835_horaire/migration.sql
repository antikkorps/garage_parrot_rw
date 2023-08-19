-- CreateTable
CREATE TABLE `Horaire` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `jourDeLaSemaine` VARCHAR(191) NOT NULL,
    `openingAM` VARCHAR(191) NOT NULL,
    `closingAM` VARCHAR(191) NOT NULL,
    `openingPM` VARCHAR(191) NOT NULL,
    `closingPM` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
