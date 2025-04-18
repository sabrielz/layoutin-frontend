-- CreateTable
CREATE TABLE `PrintingJob` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `paperType` VARCHAR(191) NOT NULL,
    `width` DOUBLE NOT NULL,
    `height` DOUBLE NOT NULL,
    `quantity` INTEGER NOT NULL,
    `isCutting` BOOLEAN NOT NULL,
    `isDesign` BOOLEAN NOT NULL,
    `fileName` VARCHAR(191) NULL,
    `totalPrice` DOUBLE NOT NULL,
    `pdfUrl` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pricing` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `paperType` VARCHAR(191) NOT NULL,
    `range1_2` DOUBLE NOT NULL,
    `range3_19` DOUBLE NOT NULL,
    `range20_59` DOUBLE NOT NULL,
    `range60_99` DOUBLE NOT NULL,
    `range100` DOUBLE NOT NULL,
    `cuttingCost` DOUBLE NOT NULL,
    `designCost` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
