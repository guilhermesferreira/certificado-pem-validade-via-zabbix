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


# "Passo a Passo - Template"
  
  - Crie um Template para aplicar a varios host se necessario:
  ![](/Imagens/Template.png) 
  
   - A chave que utilizamos foi a seguinte:
 ```bash
  system.run[{$CAMINHO_BIN_SSL} x509 -in {$CAMINHO_CERT_PEM} -dates | findstr notA]
 ```

  A variavel `{$CAMINHO_BIN_SSL}` é uma macro com o caminho do servidor, onde encontramos os binarios do OpenSSL. No caso utilizamos o `\openssl\bin\openssl.exe`.
 
  A Variavel `{$CAMINHO_CERT_PEM}` é uma macro, com o caminho do certificado a ser validado.

# "Passo a Passo - Zabbix-Agent"

 - Configuração no Zabbix-Agent:
  Dentro do arquivo de config Zabbix-Agent (c$\zabbix\conf\zabbix_agentd.conf), é necessário ativar duas chaves:
  ```bash
  EnableRemoteCommands=1
  LogRemoteCommands=1
  ```
  
# "Passo a Passo - Trigers"
  - Trigger de alerta:
    Para que o Zabbix alerte sobre a inconsistência no item, precisamos criar uma Trigger
  ![](/Imagens/trigger-criando.png)
  
    A expressão utilizada na trigger é a seguinte:
    ```bash
    date() >= last(/Template/system.run[{$CAMINHO_BIN_SSL} x509 -in {$CAMINHO_CERT_PEM} -dates | findstr notA])
    ```

 
