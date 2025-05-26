document.getElementById('formPensao').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obter valores do formulário
    const diarias = parseInt(this.diaria.value);
    const hospedes = parseInt(this.hospede.value);
    const refeicao = this.refeicao.value;
    const desconto = this.tipo_contratacao.value === 'com_desconto';
    

    const valores = {
      'com_desconto': {
        'CAFÉ': {
          '1': 40.60,   // 1 ADL
          '2': 81.20,   // 2 ADL
          '3': 110.20,  // 2 ADL + 1 CHD
          '4': 139.20,  // 2 ADL + 2 CHD
          '5': 121.80,  // 3 ADL
          '6': 150.80,  // 3 ADL + 1 CHD
          '7': 162.40   // 4 ADL
        },
        'MEIA_PENSAO': {
          '1': 103.60,
          '2': 207.20,
          '3': 281.20,
          '4': 355.20,
          '5': 310.80,
          '6': 384.80,
          '7': 414.40
        },
        'PENSAO_COMPLETA': {
          '1': 166.60,
          '2': 333.20,
          '3': 452.20,
          '4': 571.20,
          '5': 499.80,
          '6': 618.80,
          '7': 666.40
        }
      },
      'sem_desconto': {
        'CAFÉ': {
          '1': 58.00,
          '2': 116.00,
          '3': 145.00,
          '4': 174.00,
          '5': 174.00,
          '6': 203.00,
          '7': 232.00
        },
        'MEIA_PENSAO': {
          '1': 148.00,
          '2': 296.00,
          '3': 370.00,
          '4': 444.00,
          '5': 444.00,
          '6': 518.00,
          '7': 592.00
        },
        'PENSAO_COMPLETA': {
          '1': 238.00,
          '2': 476.00,
          '3': 595.00,
          '4': 714.00,
          '5': 714.00,
          '6': 833.00, 
          '7': 952.00
        }
      }
    };
    
    // Determinar qual tabela de preços usar
    const tabelaPrecos = desconto ? valores.com_desconto : valores.sem_desconto;
    
    // Obter o valor base para a combinação selecionada
    const valorDiaria = tabelaPrecos[refeicao][hospedes];
    
    // Calcular valor total (valor da diária × número de diárias)
    const valorTotal = valorDiaria * diarias;
    
    // Exibir resultado
    document.getElementById('resultado').innerHTML = `
      Valor Total: R$ ${valorTotal.toFixed(2).replace('.', ',')}
      <br><small>${desconto ? 'Com 30% de desconto em adultos' : 'Sem desconto'}</small>
    `;
  });