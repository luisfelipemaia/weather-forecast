# weather-forecast

Aplicação web que mostra o clima atual de uma cidade, feita com HTML, CSS e JavaScript puro e a API da OpenWeatherMap.

## O que faz

- Busca uma cidade pelo nome e mostra:
  - temperatura atual e descrição do clima, com o ícone da OpenWeatherMap
  - temperatura máxima e mínima
  - umidade
  - velocidade do vento
- Avisa se o campo estiver vazio.
- Mostra uma imagem de erro (404) quando a cidade não é encontrada.

## Demo

<img width="546" height="467" alt="image" src="https://github.com/user-attachments/assets/e0a2057b-e929-4b55-bdff-1d38a4a4c89f" />

## Stack

- HTML5, CSS3 e JavaScript (sem frameworks)
- [OpenWeatherMap API](https://openweathermap.org/api): endpoint de clima atual
- Font Awesome 6.7.2 (ícones) e Google Fonts, fonte Poppins

## Como rodar

1. Clone o repositório:

       git clone https://github.com/luisfelipemaia/weather-forecast

2. Crie uma conta gratuita na OpenWeatherMap e gere sua chave de API.
3. Em `src/script.js`, coloque a sua chave na variável `chave`.
4. Abra o `index.html` no navegador (ou use a extensão Live Server do VS Code).

## Estrutura

    index.html
    src/
      script.js        # busca na API e atualização da tela
      styles/style.css
      images/404.svg

## Decisões técnicas

- A busca usa `fetch` com `async/await` e trata a resposta pelo campo `cod` da API.
- Parâmetros `units=metric` (graus Celsius) e `lang=pt_br` (descrição em português).
- Sem dependências de build: basta abrir o HTML.

## Limitações conhecidas

- A velocidade do vento está rotulada como km/h, mas a API em modo métrico retorna metros por segundo.
- Não há tratamento para falha de rede (sem internet, a busca não mostra erro).
