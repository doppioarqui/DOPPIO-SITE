#!/bin/bash

# Criar estrutura de pastas
mkdir -p public/images/logos
mkdir -p public/images/equipe  
mkdir -p public/images/processo
mkdir -p public/images/projetos/apartamento-tj
mkdir -p public/videos

# Copiar vídeo
cp /mnt/user-data/outputs/video_hero_doppio.mp4 public/videos/hero.mp4

# Copiar logos
cp /mnt/user-data/uploads/LOGO_FINAL_PRETO.png public/images/logos/logo-preto.png
cp /mnt/user-data/uploads/LOGO_FINAL_BRANCO.png public/images/logos/logo-branco.png

# Copiar fotos equipe
cp /mnt/user-data/uploads/Doppio-14.jpg public/images/equipe/nertan.jpg
cp /mnt/user-data/uploads/Doppio-21.jpg public/images/equipe/letycia.jpg
cp /mnt/user-data/uploads/Doppio-82.jpg public/images/equipe/dupla.jpg

# Copiar fotos processo
cp /mnt/user-data/uploads/Doppio-06.jpg public/images/processo/materiais-01.jpg

# Copiar fotos projeto
cp /mnt/user-data/uploads/Foto1_capa.png public/images/projetos/apartamento-tj/01-capa.png
cp /mnt/user-data/uploads/Foto2.png public/images/projetos/apartamento-tj/02-living.png
cp /mnt/user-data/uploads/Foto3.png public/images/projetos/apartamento-tj/03-living2.png
cp /mnt/user-data/uploads/Foto4.png public/images/projetos/apartamento-tj/04-living3.png
cp /mnt/user-data/uploads/Foto5.png public/images/projetos/apartamento-tj/05-cozinha.png
cp /mnt/user-data/uploads/Foto6.png public/images/projetos/apartamento-tj/06-cozinha2.png

echo "✅ Assets copiados com sucesso!"
