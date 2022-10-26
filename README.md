# Validação de Certificado .PEM usando o Zabbix-Agent

# Funcionalidade:
  Monitoramento de arquivo-certificado com Zabbix-Agent e Grafana. 
  Gere alertas quando o arquivo expirar, ou estiver proximo de um parâmetro definido.
 
# Especificações:
  - Certificados do tipo .PEM (Como utilizamos o OpenSSL, provavelmente funcione para os certificados suportados por ele ... Com alguns ajustes )
  - Dsesenvolvido um template zabbix para facilitar a implementação.
  - Deenvolvido uma chave personalizada para a monitoria.
  - Desenvolvido também um script .JS, para transfomarmos os dados brutos, em dados suportados pelo zabbix.
  
 # Dependências:
  - É necessario um Zabbix Server e um Zabbix-Agent(Ativo) para a monitoria.
  - Uma depêndencia 
  - É necessario o download os binarios do OpenSSL. ([download](https://gnuwin32.sourceforge.net/packages/openssl.htm))
 
 # Alertas:
 Validade do Certificado no Grafana:
 ![](/Imagens/validade_grafana.png)
 
 Trigger no Zabbix - Aviso de Vencimento:
 ![](/Imagens/trigger.png)
 
  # Certificado:
 Exemplo de certificado a ser monitorado:
  
 ![](/Imagens/certificados1.png)
 ![](/Imagens/Certificado.png)



 
