# Estrutura do projecto 3V

## Frontend
- `src/pages/`: p?ginas p?blicas
- `src/components/layout/`: header, footer e navega??o
- `src/components/sections/`: blocos da homepage
- `src/data/`: conte?do est?tico da organiza??o
- `src/layouts/`: layout principal do website
- `src/services/`: acesso a API e conte?dos

## Backend
- `src/modules/content/`: miss?o, vis?o, valores, sobre n?s
- `src/modules/events/`: calend?rio e eventos
- `src/modules/forms/`: pedido de ades?o, feedback e formul?rios internos
- `src/modules/contact/`: formul?rio de contacto
- `src/modules/newsletter/`: subscri??o de novidades

## Infra
- `docker-compose.yml`: base de dados local
- `nginx/default.conf`: reverse proxy para deployment
