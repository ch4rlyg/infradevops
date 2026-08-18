# infradevops



## Repositorio de Imágenes
#Construir imagen de saludo
docker build -t jeanmen93/my-app:1.0.0 . --platform linux/amd64

#Construir imagen de secreto
docker build -t jeanmen93/my-app-secret:1.0.0 . --platform linux/amd64

#Push de imagen en Docker Hub
docker push jeanmen93/my-app:1.0.0

#Push de imagen en Docker Hub
docker push jeanmen93/my-app-secret:1.0.0

## 