# Validação de Certificado .PEM usando o Zabbix-Agent

# Funcionalidade:
  Monitoramento de arquivo-certificado com Zabbix-Agent e Grafana. 
 
# Especificações:
  - Certificados do tipo .PEM (Mas como utilizamos o OpenSSL, provavelmente funcione para os certificados suportados por ele ... Com alguns ajustes )
  - Dsesenvolvido um template zabbix para facilitar a implementação.
  - Deenvolvido uma chave personalizada para a monitoria.
  - Desenvolvido também um script .JS, para transfomarmos os dados brutos, em dados suportados pelo zabbix.
  
 # Dependências:
  - É necessario um Zabbix Server e um Zabbix-Agent(Ativo) para a monitoria.
  - Uma depêndencia 
  - É necessario o download os binarios do OpenSSL. ( Faça o download [aqui]  )
  [aqui]:https://gnuwin32.sourceforge.net/packages/openssl.htm
 
 
 Exemplo de certificado a ser monitorado:
 
  ![](/Imagens/certificados1.png)
