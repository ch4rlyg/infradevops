# infradevops



## Repositorio de Imágenes
Construir imagen de saludo
docker build -t jeanmen93/my-app:1.0.0 . --platform linux/amd64

Construir imagen de secreto
docker build -t jeanmen93/my-app-secret:1.0.0 . --platform linux/amd64

Push de imagen en Docker Hub
docker push jeanmen93/my-app:1.0.0

Push de imagen en Docker Hub
docker push jeanmen93/my-app-secret:1.0.0

## Crear infraestructura para el despliegue

# Imagen en Azure Container Repository
az acr login --name acrjmendozawestus2dev001.azurecr.io
docker tag jeanmen93/my-app:2.0.0 acrjmendozawestus2dev001.azurecr.io/jeanmen93/my-app:2.0.0   
docker push acrjmendozawestus2dev001.azurecr.io/jeanmen93/my-app:2.0.0 