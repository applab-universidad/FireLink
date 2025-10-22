# FireLink
App Bomberos
                   ┌───────────┐
                   │   main    │  <- Protegida, solo merges desde release
                   └─────┬─────┘
                         │
                         │ Merge release → main
                         │
                   ┌─────▼─────┐
                   │  release  │  <- Preparación de versión, QA
                   └─────┬─────┘
                         │ Merge develop → release
                         │
                   ┌─────▼─────┐
                   │ develop   │  <- Integración de todas las ramas de desarrollo
                   └───┬─┬─────┘
                       │ │
        --------------   ---------------
        │                            │
┌───────▼───────┐            ┌───────▼───────┐
│ dev-fernando  │            │ dev-fede      │
│ - feature/*   │            │ - feature/*   │
│ - fix/*       │            └───────────────┘
└───────┬───────┘
        │ Rebase develop → dev-fernando
        │
┌───────▼──────────┐
│ feature/mapa     │
└─────────────────┘
┌───────▼──────────┐
│ fix/login        │
└─────────────────┘

🔹## 🔹 Reglas de flujo de trabajo

### Ramas personales (`dev-fernando`, `dev-fede`, `dev-nombre`)
- Crear **Pull Request** a `develop` al terminar features/fixes.  
- Mantener commits limpios y descriptivos.

### Ramas de integración (`develop`)
- Recibir PRs de ramas personales con **merge commit**.  
- Realizar pruebas de integración y QA.  
- Merge hacia `release` para preparar versiones.

### Rama `release`
- PR desde `develop`.  
- Permite pruebas finales y correcciones rápidas (**hotfix**) antes de merge a `main`.

### Rama `main`
- Protegida, solo merges desde `release`.  
- Historial limpio de versiones publicadas.  
- Taggear versiones (`v1.0.0`, etc).


## 🔹 Comandos frecuentes por escenario

| Acción | Comando típico |
|--------|----------------|
| Rebase feature → rama personal |

 ```bash
git checkout feature/mapa
git rebase dev-fernando
``` 
|| Rebase rama personal → develop |

 ```bash
git checkout dev-fernando
git rebase develop
```
|| Merge rama personal → develop | 

```bash
git checkout develop
git merge dev-fernando
``` 
|| Merge develop → release | 

```bash
git checkout release
git merge develop
``` 
|| Merge release → main | 

```bash
git checkout main
git merge release
``` 

##  Guía de Trabajo con Ramas (para el Equipo)


Este es el flujo **seguro y ordenado** para que cada integrante del equipo trabaje en su propia rama sin afectar al resto del proyecto.

main
├── release
└── develop
    ├── dev-fernando
    │   ├── feature/mapa
    │   └── fix/login
    ├── dev-fede
    │   └── feature/notificaciones
    ├── dev-nombre 
    │   └── feature/perfil-usuario


---

###  Paso 1: Clonar el proyecto desde GitHub

Esto descarga el proyecto en tu computadora:

```bash
git clone https://github.com/applab-universidad/FireLink.git
cd FireLink
```
---
### Paso 2: Obtener la rama develop desde el servidor

```bash
git fetch origin develop
git checkout -b develop origin/develop
```
### Paso 3: Crear tu propia rama personal (basada en develop)

```bash
git checkout -b dev-tuNombre
```
 **Reemplazá tuNombre por tu nombre real, por ejemplo:**
 
```bash
git checkout -b dev-federico
```
*Esta rama va a contener solo tus avances. Más adelante de nesesario  puedes crear otras ramas para las tareas que nesesites*

### Paso 4: Subir tu rama personal a GitHub
Así quedará visible en el servidor y podrá sincronizarse con los demas integrantes del equipo si hace falta.

```bash
git push -u origin dev-federico
```
*-u vincula tu rama local con la del servidor, para que después puedas usar solo git push o git pull.*

### Buenas prácticas

* No toques la rama main.
* **No crees ramas directamente desde main.**
* **Hacé pull requests desde tu rama hacia develop (nunca hacia main).**
* Usá nombres claros y consistentes para las ramas.
* Revisá tu código antes de subir cambios grandes.

  
