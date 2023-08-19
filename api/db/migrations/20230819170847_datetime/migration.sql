/*
  Warnings:

  - You are about to alter the column `openingAM` on the `Horaire` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - You are about to alter the column `closingAM` on the `Horaire` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - You are about to alter the column `openingPM` on the `Horaire` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - You are about to alter the column `closingPM` on the `Horaire` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `Horaire` MODIFY `openingAM` DATETIME(3) NOT NULL,
    MODIFY `closingAM` DATETIME(3) NOT NULL,
    MODIFY `openingPM` DATETIME(3) NOT NULL,
    MODIFY `closingPM` DATETIME(3) NOT NULL;
